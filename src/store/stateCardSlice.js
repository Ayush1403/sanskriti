// src/redux/stateCardsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import stateCardsData from "../states/stateCards.json"; // Assuming JSON is placed in the states folder

const initialState = {
  cards: stateCardsData, // Load cards data from JSON
};

const stateCardsSlice = createSlice({
  name: "stateCards",
  initialState,
  reducers: {
    // Add any reducers here if needed
  },
});

export const selectStateCards = (state) => state.stateCards.cards;

export default stateCardsSlice.reducer;
