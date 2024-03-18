"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    addItem: (state, action) => {
      console.log(JSON.stringify(state))
      console.log(action)
      state.push(action.payload)
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
