import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigationIndex: 0,
};

const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    changeNavigation: (state, action) => {
      state.navigationIndex = action.payload;
    },
  },
});

export const { changeNavigation } = navSlice.actions;

export default navSlice.reducer;
