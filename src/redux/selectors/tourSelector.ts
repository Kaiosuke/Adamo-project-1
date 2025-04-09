import { RootState } from "../index";

const tourSelector = (state: RootState) => state.toursSlice;

export { tourSelector };
