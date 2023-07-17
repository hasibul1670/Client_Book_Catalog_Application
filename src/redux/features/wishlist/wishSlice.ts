import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/bookTypes";

type Iwish = {
  book: IBook[];
}
const storedwish = localStorage.getItem("wishlist");
const initialwishState: Iwish =

storedwish ? JSON.parse(storedwish) : { book: [] };



const wishSlice = createSlice({
  name: "wishlist",
  initialState: initialwishState,
  reducers: {
    addTowish: (state, action: PayloadAction<IBook>) => {
      state.book.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("wishlist", JSON.stringify(state));
    },

    removeFromwish: (state, action: PayloadAction<IBook>) => {
      state.book = state.book.filter((book) => book.id !== action.payload.id);

      localStorage.setItem("wishlist", JSON.stringify(state));
    },

    markAsFinished: (state, action: PayloadAction<IBook>) => {
      const updatedBook = {
        ...action.payload,
        finishedReading: true,
      };

      state.book = state.book.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );

      localStorage.setItem("wishlist", JSON.stringify(state.book));
    },
    markAsUnfinished: (state, action: PayloadAction<IBook>) => {
      const updatedBook = {
        ...action.payload,
        finishedReading: false,
      };

      state.book = state.book.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );

      localStorage.setItem("wishlist", JSON.stringify(state.book));
    },
  },
});

export const { addTowish, markAsUnfinished, markAsFinished, removeFromwish } =
  wishSlice.actions;

export default wishSlice.reducer;
