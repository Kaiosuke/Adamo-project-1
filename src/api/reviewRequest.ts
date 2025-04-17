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

const getReviewsHotel = async ({
  hotelId,
  _page = 1,
  _limit = 3,
}: {
  hotelId: number | string;
  _page?: number | string;
  _limit?: number | string;
}): Promise<IReviewHotel[]> => {
  const res = await instanceLocal.get(`reviewsHotel?hotelId=${hotelId}`, {
    params: {
      _page,
      _limit,
    },
  });
  localStorage.setItem("totalReviewHotel", res.headers["x-total-count"]);
  return res.data;
};

const addReviewHotel = async ({
  data,
}: {
  data: Omit<IReviewHotel, "id">;
}): Promise<IReviewHotel> => {
  const res = await instanceLocal.post("reviewsHotel", data);
  localStorage.setItem("totalReviewHotel", res.headers["x-total-count"]);
  return res.data;
};

export { getReviewsHotel, getReviewTourList, addReviewHotel };
