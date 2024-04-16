import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantDishIds } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
      const dishIds = selectDishIds(state);

      return restaurantDishIds.some((dishId) => !dishIds.includes(dishId));
    },
  }
);
