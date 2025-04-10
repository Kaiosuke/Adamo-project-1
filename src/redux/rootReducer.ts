import { combineReducers } from "redux";
import toursSlice from "./slices/toursSlice";
import hotelsSlice from "./slices/hotelsSlice";

const rootReducer = combineReducers({
  toursSlice: toursSlice,
  hotelsSlice: hotelsSlice,
});
export default rootReducer;
