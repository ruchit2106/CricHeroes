"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(JSON.stringify(state));
      console.log(action);
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state.splice(action.payload, 1);
      console.log(state);
    },
    emptyCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addItem } = cartSlice.actions;
export const { removeItem } = cartSlice.actions;
export const { emptyCart } = cartSlice.actions;

export const selectProducts = (state) => state.cartReducer;
export default cartSlice.reducer;
