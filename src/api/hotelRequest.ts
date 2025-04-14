import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceLocal } from "./instance";
import { IHotel } from "@/interfaces/hotel";

const getAllHotel = createAsyncThunk<
  IHotel[],
  {
    location?: string;
    score?: number;
    star?: number[];
    price?: number[];
    start?: number;
    limit?: number;
    sort?: string;
  },
  { rejectValue: string }
>(
  "hotel/getAll",
  async (
    {
      location = "",
      score = 0,
      star = [],
      price = [0, 300],
      start = 0,
      limit = 4,
      sort = "price-asc",
    },
    { rejectWithValue }
  ) => {
    try {
      const arrSort = sort.split("-");

      const separateStar = () => {
        let result = "";
        star.forEach((v) => {
          result += `star=${v}&`;
        });

        return result;
      };

      const dataPrice = `price_gte=${price[0]}&price_lte=${price[1]}`;
      const dataStar = separateStar();

      const res = await instanceLocal.get(
        `/hotels?location_like=${location}&score_gte=${score}&${
          star.length && dataStar
        }&${dataPrice}&_start=${start}&_limit=${limit}&_sort=${
          arrSort[0]
        }&_order=${arrSort[1]}`
      );
      localStorage.setItem(
        "totalHotel",
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

const getHotelById = createAsyncThunk<
  IHotel,
  number,
  { search: string; rejectValue: string }
>("hotel/getById", async (id, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get(`/hotels?id=${id}`);
    return res.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

const getFiltersHotel = createAsyncThunk<
  {
    locations: string[];
    guests: string[];
  },
  void,
  { rejectValue: string }
>("hotel/filer", async (_, { rejectWithValue }) => {
  try {
    const getLocations = async () => {
      try {
        const res = await instanceLocal.get("/locationHotels");
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

    const [locations, guests] = await Promise.all([
      getLocations(),

      getGuests(),
    ]);

    return { locations, guests };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

export { getAllHotel, getHotelById, getFiltersHotel };
