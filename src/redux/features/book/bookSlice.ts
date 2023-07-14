import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Ibook {
  status: boolean;
  priceRange: number;
}

const initialState: Ibook = {
  status: false,
  priceRange: 400,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleState, setPriceRange } = bookSlice.actions;

export default bookSlice.reducer;
