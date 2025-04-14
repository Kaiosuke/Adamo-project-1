import { getAllHotel, getFiltersHotel, getHotelById } from "@/api/hotelRequest";
import { IHotel } from "@/interfaces/hotel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IHotelState {
  error: string | boolean | undefined;
  loading: boolean;
  hotels: IHotel[];
  guests: string[];
  locations: string[];
  filter: {
    location: string;
    star: number[];
    guest: string;
    score: number;
    sort: string;
    price: number[];
  };
  hotel: IHotel | null;
}

const initialState: IHotelState = {
  error: false,
  loading: true,
  hotels: [],
  guests: [],
  locations: [],
  hotel: null,
  filter: {
    location: "",
    star: [],
    guest: "",
    sort: "price-asc",
    score: 0,
    price: [0, 300],
  },
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
  reducers: {
    filterByLocation: (state: IHotelState, action: PayloadAction<string>) => {
      state.filter.location = action.payload;
    },
    filterByStar: (state: IHotelState, action: PayloadAction<number[]>) => {
      state.filter.star = action.payload;
    },
    filterByScore: (state: IHotelState, action: PayloadAction<number>) => {
      state.filter.score = action.payload;
    },
    filterByPrice: (state: IHotelState, action: PayloadAction<number[]>) => {
      state.filter.price = action.payload;
    },
    filterByGuest: (state: IHotelState, action: PayloadAction<string>) => {
      state.filter.guest = action.payload;
    },
    filterBySort: (state: IHotelState, action: PayloadAction<string>) => {
      state.filter.sort = action.payload;
    },
  },
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

    build.addCase(getFiltersHotel.pending, setLoading);
    build.addCase(
      getFiltersHotel.fulfilled,
      (
        state: IHotelState,
        action: PayloadAction<{
          locations: string[];
          guests: string[];
        }>
      ) => {
        state.loading = false;
        state.error = false;
        state.locations = action.payload.locations;
        state.guests = action.payload.guests;
      }
    );
    build.addCase(getFiltersHotel.rejected, setError);
  },
});

export default hotelsSlice.reducer;

export const {
  filterByGuest,
  filterByLocation,
  filterByPrice,
  filterByStar,
  filterBySort,
  filterByScore,
} = hotelsSlice.actions;
