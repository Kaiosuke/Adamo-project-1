import { combineReducers } from "redux";
import toursSlice from "./slices/toursSlice";
import hotelsSlice from "./slices/hotelsSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  toursSlice: toursSlice,
  hotelsSlice: hotelsSlice,
  authSlice: authSlice,
});
export default rootReducer;
