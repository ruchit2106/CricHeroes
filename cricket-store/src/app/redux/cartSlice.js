"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state = [...state, action];
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
