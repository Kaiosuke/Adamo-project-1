import { addReviewTour, getReviewTourList } from "@/api/reviewRequest";
import { IReviewTour } from "@/interfaces/review";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStateReview {
  loading: boolean;
  error: undefined | string;
  reviewsTour: IReviewTour[];
}

const initialState: IStateReview = {
  loading: false,
  error: undefined,
  reviewsTour: [],
};

const setLoading = (state: IStateReview) => {
  state.loading = true;
  state.error = undefined;
};

const setError = (
  state: IStateReview,
  action: PayloadAction<string | undefined>
) => {
  state.loading = false;
  state.error = action.payload;
};

const reviewsSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getReviewTourList.pending, setLoading);
    builder.addCase(
      getReviewTourList.fulfilled,
      (state: IStateReview, action: PayloadAction<IReviewTour[]>) => {
        state.loading = false;
        state.error = undefined;
        state.reviewsTour = action.payload.reverse();
      }
    );
    builder.addCase(getReviewTourList.rejected, setError);

    builder.addCase(addReviewTour.pending, setLoading);
    builder.addCase(
      addReviewTour.fulfilled,
      (state: IStateReview, action: PayloadAction<IReviewTour>) => {
        (state.loading = false), (state.error = undefined);
        state.reviewsTour = [...state.reviewsTour, action.payload].reverse();
      }
    );
  },
});

export default reviewsSlice.reducer;
