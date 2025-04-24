import { ITour } from "@/interfaces/tour";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceLocal } from "./instance";

const getAllTour = createAsyncThunk<
  ITour[],
  {
    location?: string;
    types?: string[];
    durations?: string;
    price?: number[];
    start?: number;
    limit?: number;
  },
  { rejectValue: string }
>(
  "tour/getAll",
  async (
    { location = "", types = [], durations, price, start = 0, limit = 4 },
    { rejectWithValue }
  ) => {
    try {
      const separateType = () => {
        let result = "";
        types.forEach((v) => {
          result += `type=${v}&`;
        });

        return types ? result : "";
      };

      const arrDuration =
        durations && durations.length ? durations.split("-") : [0, 30];

      const dataDuration = `duration_gte=${arrDuration[0]}&duration_lte=${arrDuration[1]}`;

      const dataPrice = price && `price_gte=${price[0]}&price_lte=${price[1]}`;

      const isAll = types.toString().startsWith(" ");

      const dataType = isAll ? "&" : separateType();

      const res = await instanceLocal.get(
        `/tours?location_like=${location}&${types && dataType}${
          durations && dataDuration
        }&${price && dataPrice}&_start=${start}&_limit=${limit}`
      );
      localStorage.setItem(
        "totalTour",
        JSON.stringify(parseInt(res.headers["x-total-count"]))
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message);
      }
      return rejectWithValue("Error");
    }
  }
);

const getTourById = createAsyncThunk<
  ITour,
  number,
  { search: string; rejectValue: string }
>("tour/getById", async (id, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get(`/tours?id=${id}`);
    return res.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

const getFiltersTour = createAsyncThunk<
  {
    locations: string[];
    types: string[];
    guests: string[];
    durations: { title: string; time: string }[];
  },
  void,
  { rejectValue: string }
>("tour/filer", async (_, { rejectWithValue }) => {
  try {
    const getLocations = async () => {
      try {
        const res = await instanceLocal.get("/locationTours");
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message);
        }
        return rejectWithValue("Error");
      }
    };

    const getTypes = async () => {
      try {
        const res = await instanceLocal.get("/typeTours");
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message);
        }
        return rejectWithValue("Error");
      }
    };

    const getGuests = async () => {
      try {
        const res = await instanceLocal.get("/guests");
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message);
        }
        return rejectWithValue("Error");
      }
    };

    const getDurations = async () => {
      try {
        const res = await instanceLocal.get("/duration");
        return res.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message);
        }
        return rejectWithValue("Error");
      }
    };

    const [locations, types, guests, durations] = await Promise.all([
      getLocations(),
      getTypes(),
      getGuests(),
      getDurations(),
    ]);

    return { locations, types, guests, durations };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

const getTours = async ({
  _page = 1,
  _limit = 10,
}: {
  _page?: number;
  _limit?: number;
}): Promise<ITour[]> => {
  const res = await instanceLocal("tours", {
    params: {
      _page: _page,
      _limit: _limit,
    },
  });

  return res.data;
};

export { getAllTour, getTourById, getFiltersTour, getTours };
