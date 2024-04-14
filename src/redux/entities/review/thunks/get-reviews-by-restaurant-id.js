import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (result.lenght === 0) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewIds(
        state,
        restaurantId
      );
      const reviewIds = selectReviewIds(state);

      return restaurantReviewIds.some(
        (reviewId) => !reviewIds.includes(reviewId)
      );
    },
  }
);
