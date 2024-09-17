import { createSlice } from "@reduxjs/toolkit";
import stateData from "../states/states.json";

const initialState = {
  list: stateData,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
