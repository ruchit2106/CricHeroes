"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const index = state.findIndex(product => product.id == action.payload.id);

      if (index != -1)
        ++state[index].quantity;

      else
        state.push(action.payload);
    },
    increaseQty: (state, action) => {
      const index = state.findIndex(product => product.id == action.payload);
      ++state[index].quantity;
    },
    decreaseQty: (state, action) => {
      const index = state.findIndex(product => product.id == action.payload);
      --state[index].quantity;

      if (state[index].quantity == 0)
        state.splice(index, 1);
    },
    emptyCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addItem } = cartSlice.actions;
export const { emptyCart } = cartSlice.actions;
export const { increaseQty } = cartSlice.actions;
export const { decreaseQty } = cartSlice.actions;

export const selectProducts = (state) => state.cartReducer;
export default cartSlice.reducer;
