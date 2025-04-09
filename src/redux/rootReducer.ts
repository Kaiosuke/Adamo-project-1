import { combineReducers } from "redux";
import toursSlice from "./slices/toursSlice";

const rootReducer = combineReducers({
  toursSlice: toursSlice,
});
export default rootReducer;
