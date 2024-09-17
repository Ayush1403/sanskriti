// src/store/cardsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        imageSrc: "/docs/images/blog/image-1.jpg",
        title: "Card Title 1",
        description: "Card description 1.",
        link: "#",
      },
      {
        imageSrc: "/docs/images/blog/image-2.jpg",
        title: "Card Title 2",
        description: "Card description 2.",
        link: "#",
      },
      {
        imageSrc: "/docs/images/blog/image-3.jpg",
        title: "Card Title 3",
        description: "Card description 3.",
        link: "#",
      },
    ],
  },
  reducers: {},
});

export const selectCards = (state) => state.cards.cards;

export default cardsSlice.reducer;
