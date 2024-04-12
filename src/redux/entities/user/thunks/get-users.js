import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "user/GetUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users`);
    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue("no data");
    }

    return result;
  }
);
