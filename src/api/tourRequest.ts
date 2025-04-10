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
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

const getLocationTour = createAsyncThunk<
  string[] | string,
  void,
  { rejectValue: string }
>("tour/getLocation", async (_, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get("/locationTours");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

const getTypeTours = createAsyncThunk<
  string[] | string,
  void,
  { rejectValue: string }
>("tour/getType", async (_, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get("/typeTours");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

export { getAllTour, getTourById, getLocationTour, getTypeTours };
