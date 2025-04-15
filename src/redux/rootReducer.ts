import { combineReducers } from "redux";
import toursSlice from "./slices/toursSlice";
import hotelsSlice from "./slices/hotelsSlice";
import authSlice from "./slices/authSlice";
import reviewsSlice from "./slices/reviewsSlice";

const rootReducer = combineReducers({
  toursSlice: toursSlice,
  hotelsSlice: hotelsSlice,
  authSlice: authSlice,
  reviewsSlice: reviewsSlice,
});
export default rootReducer;
