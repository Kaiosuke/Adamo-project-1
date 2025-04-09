import { ITour } from "@/interfaces/tour";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceLocal } from "./instance";

const getAllTour = createAsyncThunk<
  ITour[],
  void,
  { search: string; rejectValue: string }
>("tour/getAll", async (_, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get("/tours");
    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

const getTourById = createAsyncThunk<
  ITour,
  number,
  { search: string; rejectValue: string }
>("tour/getById", async (id, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get(`/tours?id=${id}`);
    return res.data[0];
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

export { getAllTour, getTourById };
