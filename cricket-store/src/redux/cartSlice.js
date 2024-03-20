"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const stateIterationFunction = (state, productId, operationType) => {
  let i = 0;
  for (i; i < state.length; i++) {
    // Check if the current object's ID matches the given ID
    if (state[i].Id === productId) {
      // Return the object if found

      if (operationType == "add") {
        ++state[i].Quantity;
      } else if (operationType == "remove") {
        --state[i].Quantity;
        if (state[i].Quantity == 0) {
          state.splice(i, 1);
        }
      }
      break;
    }
  }
  if (i == state.length) return false;

  return true;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!stateIterationFunction(state, action.payload.Id, "add"))
        state.push(action.payload);
    },
    increaseQty: (state, action) => {
      stateIterationFunction(state, action.payload, "add");
    },
    decreaseQty: (state, action) => {
      stateIterationFunction(state, action.payload, "remove");
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
