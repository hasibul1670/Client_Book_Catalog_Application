import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/bookTypes";

interface ICart {
  book: IBook[];
  total: number;
}

const initialState: ICart = {
  book: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      const existing = state.book.find(
        (product) => product.id === action.payload.id
      );

      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.book.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IBook>) => {
      const existing = state.book.find(
        (product) => product.id === action.payload.id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.book = state.book.filter(
          (product) => product.id !== action.payload.id
        );
      }

      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IBook>) => {
      state.book = state.book.filter(
        (product) => product.id !== action.payload.id
      );

      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
