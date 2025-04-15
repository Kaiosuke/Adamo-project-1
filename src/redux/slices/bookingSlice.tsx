import { IBooking } from "@/interfaces/booking";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStateBooking {
  loading: boolean;
  error: undefined | string;
  booking: IBooking | undefined;
}

const initialState: IStateBooking = {
  loading: false,
  error: undefined,
  booking: undefined,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state: IStateBooking, action: PayloadAction<IBooking>) => {
      state.booking = action.payload;
    },
  },
});

export default bookingSlice.reducer;
export const { addBooking } = bookingSlice.actions;
