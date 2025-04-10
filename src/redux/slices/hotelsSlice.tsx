import { getAllHotel, getHotelById } from "@/api/hotelRequest";
import { IHotel } from "@/interfaces/hotel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotelState {
  error: string | boolean | undefined;
  loading: boolean;
  hotels: IHotel[];
  hotel: IHotel | null;
}

const initialState: IHotelState = {
  error: false,
  loading: true,
  hotels: [],
  hotel: null,
};

const setLoading = (state: IHotelState) => {
  state.loading = true;
  state.error = false;
};

const setError = (
  state: IHotelState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload;
};

const hotelsSlice = createSlice({
  initialState,
  name: "Hotel",
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllHotel.pending, setLoading);
    build.addCase(
      getAllHotel.fulfilled,
      (state: IHotelState, action: PayloadAction<IHotel[]>) => {
        state.loading = false;
        state.error = false;
        state.hotels = action.payload;
      }
    );
    build.addCase(getAllHotel.rejected, setError);

    build.addCase(getHotelById.pending, setLoading);
    build.addCase(
      getHotelById.fulfilled,
      (state: IHotelState, action: PayloadAction<IHotel>) => {
        state.loading = false;
        state.error = false;
        state.hotel = action.payload;
      }
    );
    build.addCase(getHotelById.rejected, setError);
  },
});

export default hotelsSlice.reducer;
