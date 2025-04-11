import { ITour } from "@/interfaces/tour";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceLocal } from "./instance";

const getAllTour = createAsyncThunk<
  ITour[],
  { location: string; types: string; durations: string }
>(
  "tour/getAll",
  async ({ location, types, durations }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.get(
        `/tours?location_like=${location}&${types}${durations}`
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

const getFilters = createAsyncThunk<
  {
    locations: string[];
    types: string[];
    guests: string[];
    durations: { title: string; time: string }[];
  },
  void,
  { rejectValue: string }
>("tour/filers", async (_, { rejectWithValue }) => {
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

export { getAllTour, getTourById, getFilters };
