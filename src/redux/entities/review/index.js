import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce((acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
});
