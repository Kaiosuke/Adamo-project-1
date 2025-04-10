import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceLocal } from "./instance";
import { IHotel } from "@/interfaces/hotel";

const getAllHotel = createAsyncThunk<
  IHotel[],
  void,
  { search: string; rejectValue: string }
>("hotel/getAll", async (_, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get("/hotels");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

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

const getLocationHotels = createAsyncThunk<
  string[] | string,
  void,
  { rejectValue: string }
>("hotel/getLocation", async (_, { rejectWithValue }) => {
  try {
    const res = await instanceLocal.get("/locationHotels");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message);
    }
    return rejectWithValue("Error");
  }
});

export { getAllHotel, getHotelById, getLocationHotels };
