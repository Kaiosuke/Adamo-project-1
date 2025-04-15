import { IReviewHotel, IReviewTour } from "@/interfaces/review";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceLocal } from "./instance";

const getReviewTourList = createAsyncThunk<
  IReviewTour[],
  { tourId: number; start?: number; limit?: number },
  { rejectValue: string }
>(
  "review/tour",
  async ({ tourId, start = 0, limit = 3 }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.get(
        `reviewsTour?tourId=${tourId}&_start=${start}&_limit=${limit}`
      );

      localStorage.setItem(
        "totalReviewTour",
        JSON.stringify(parseInt(res.headers["x-total-count"]))
      );

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue("error");
    }
  }
);

const getReviewTourHotel = createAsyncThunk<
  IReviewHotel[],
  { hotelId: number; start?: number; limit?: number },
  { rejectValue: string }
>(
  "review/hotel",
  async ({ hotelId, start = 0, limit = 3 }, { rejectWithValue }) => {
    try {
      const res = await instanceLocal.get(
        `reviewsHotel?hotelId=${hotelId}&_start=${start}&_limit=${limit}`
      );

      localStorage.setItem(
        "totalReviewHotel",
        JSON.stringify(res.headers["x-total-count"])
      );

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue("error");
    }
  }
);

export { getReviewTourList, getReviewTourHotel };
