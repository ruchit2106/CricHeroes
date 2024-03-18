"use client";

import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useEffect } from "react";

let persistedState;

useEffect(() => {
  persistedState = loadState();
}, []);

const loadState = () => {
  const loadedState = localStorage.getItem("state");
  if (loadedState === null) return undefined;
  return JSON.parse(loadedState);
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

export const store = configureStore({
  reducer: {
    cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
