import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: {},
    ids: [],
  },
  extraReducers: (builder) =>
    builder.addCase(
      getRestaurants.fulfilled,
      (state, { payload: restaurants }) =>
        entityAdapter.setAll(state, restaurants)
    ),
});
