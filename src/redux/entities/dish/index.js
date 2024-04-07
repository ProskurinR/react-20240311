import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";

export const dishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
});
