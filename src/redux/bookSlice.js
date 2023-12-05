import { createSlice } from "@reduxjs/toolkit";
import { books } from "../utilities/booklist";

const initialState = {
  bookList: books,
  selectedBook: {},
  index: 0,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    addBook: (state, action) => {
      let newState = state.bookList;
      newState.push(action.payload);
      state.bookList = newState;
    },
    editBook: (state, action) => {
      let index = state.index;
      let newState = [...state.bookList];
      newState[index] = action.payload;
      state.bookList = newState;
    },
    removeBook: (state, action) => {
      let index = action.payload;
      let newState = [...state.bookList];

      newState.splice(index, index + 1);
      state.bookList = newState;
    },
    selectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    selectedBookIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});
export const {
  addBook,
  editBook,
  removeBook,
  selectedBook,
  selectedBookIndex,
} = bookSlice.actions;

export default bookSlice.reducer;
