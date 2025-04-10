import { RootState } from "../index";

const hotelSelector = (state: RootState) => state.hotelsSlice;

export { hotelSelector };
