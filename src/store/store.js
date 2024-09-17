// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesaslice";
import cardsReducer from "./cardSlice";
import stateCardsReducer from "./stateCardSlice"; // Import the new slice

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cards: cardsReducer,
    stateCards: stateCardsReducer, // Add the stateCards slice
  },
});
