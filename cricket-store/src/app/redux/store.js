"use client";

import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useEffect } from "react";


const loadState = () => {
  if(typeof window !== 'undefined')
  {
    const loadedState = localStorage.getItem("state");
    if (loadedState === null) return undefined;
    return JSON.parse(loadedState);

  }
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
