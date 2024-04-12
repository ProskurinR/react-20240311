import { createAsyncThunk } from "@reduxjs/toolkit";

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
  }
);
