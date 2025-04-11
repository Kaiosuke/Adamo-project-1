import {
  getAllTour,
  getGuests,
  getLocationTours,
  getTourById,
  getTypeTours,
} from "@/api/tourRequest";
import { ITour } from "@/interfaces/tour";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITourState {
  error: string | boolean | undefined;
  loading: boolean;
  tours: ITour[];
  locations: string[];
  types: string[];
  guests: string[];
  tour: ITour | null;
}

const initialState: ITourState = {
  error: false,
  loading: true,
  tours: [],
  locations: [],
  types: [],
  guests: [],
  tour: null,
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
  reducers: {},
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

    build.addCase(getLocationTours.pending, setLoading);
    build.addCase(
      getLocationTours.fulfilled,
      (state: ITourState, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.error = false;
        state.locations = action.payload;
      }
    );
    build.addCase(getLocationTours.rejected, setError);

    build.addCase(getTypeTours.pending, setLoading);
    build.addCase(
      getTypeTours.fulfilled,
      (state: ITourState, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.error = false;
        state.types = action.payload;
      }
    );
    build.addCase(getTypeTours.rejected, setError);

    build.addCase(getGuests.pending, setLoading);
    build.addCase(
      getGuests.fulfilled,
      (state: ITourState, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.error = false;
        state.guests = action.payload;
      }
    );
    build.addCase(getGuests.rejected, setError);
  },
});

export default toursSlice.reducer;
