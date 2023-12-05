import { combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import navSlice from "./navSlice";

const rootReducer = combineReducers({
  bookSlice: bookSlice,
  navSlice: navSlice,
});

export default rootReducer;
