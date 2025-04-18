import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";
import bookingSlice from "./slices/bookingSlice";
import reviewsSlice from "./slices/reviewsSlice";
import roomsSlice from "./slices/roomsSlice";
import toursSlice from "./slices/toursSlice";
import languageSlice from "./slices/languageSlice";

const rootReducer = combineReducers({
  toursSlice: toursSlice,
  authSlice: authSlice,
  reviewsSlice: reviewsSlice,
  bookingSlice: bookingSlice,
  roomsSlice: roomsSlice,
  languageSlice: languageSlice,
});
export default rootReducer;
