import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");

    const result = await response.json();

    if (result.lenght === 0) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: ({ forceReload = false } = {}, { getState }) =>
      forceReload || !selectRestaurantIds(getState())?.lenght,
  }
);
