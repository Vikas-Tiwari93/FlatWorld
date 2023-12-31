import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import navigationSlice from "./navSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
