import { getFilters, getAllTour, getTourById } from "@/api/tourRequest";
import { ITour } from "@/interfaces/tour";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITourState {
  error: string | boolean | undefined;
  loading: boolean;
  tours: ITour[];
  locations: string[];
  types: string[];
  durations: { title: string; time: string }[];
  guests: string[];
  tour: ITour | null;
  filter: {
    location: string;
    type: string[];
    guest: string;
    price: number[];
    duration: string;
  };
}

const initialState: ITourState = {
  error: false,
  loading: true,
  tours: [],
  locations: [],
  types: [],
  durations: [],
  guests: [],
  tour: null,
  filter: {
    location: "",
    type: [],
    guest: "",
    price: [],
    duration: "",
  },
};

const setLoading = (state: ITourState) => {
  state.loading = true;
  state.error = false;
};

const setError = (
  state: ITourState,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload;
};

const toursSlice = createSlice({
  initialState,
  name: "tour",
  reducers: {
    filterByLocation: (state: ITourState, action: PayloadAction<string>) => {
      state.filter.location = action.payload;
    },
    filterByType: (state: ITourState, action: PayloadAction<string[]>) => {
      state.filter.type = action.payload;
    },
    filterByGuest: (state: ITourState, action: PayloadAction<string>) => {
      state.filter.guest = action.payload;
    },
    filterByPrice: (state: ITourState, action: PayloadAction<number[]>) => {
      state.filter.price = action.payload;
    },
    filterByDuration: (state: ITourState, action: PayloadAction<string>) => {
      state.filter.duration = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(getAllTour.pending, setLoading);
    build.addCase(
      getAllTour.fulfilled,
      (state: ITourState, action: PayloadAction<ITour[]>) => {
        state.loading = false;
        state.error = false;
        state.tours = action.payload;
      }
    );
    build.addCase(getAllTour.rejected, setError);

    build.addCase(getTourById.pending, setLoading);
    build.addCase(
      getTourById.fulfilled,
      (state: ITourState, action: PayloadAction<ITour>) => {
        state.loading = false;
        state.error = false;
        state.tour = action.payload;
      }
    );
    build.addCase(getTourById.rejected, setError);

    build.addCase(getFilters.pending, setLoading);
    build.addCase(
      getFilters.fulfilled,
      (
        state: ITourState,
        action: PayloadAction<{
          locations: string[];
          types: string[];
          guests: string[];
          durations: { title: string; time: string }[];
        }>
      ) => {
        state.loading = false;
        state.error = false;

        const { locations, guests, types, durations } = action.payload;

        state.locations = locations;
        state.types = types;
        state.guests = guests;
        state.durations = durations;
      }
    );
    build.addCase(getFilters.rejected, setError);
  },
});

export default toursSlice.reducer;
export const {
  filterByDuration,
  filterByLocation,
  filterByGuest,
  filterByPrice,
  filterByType,
} = toursSlice.actions;
