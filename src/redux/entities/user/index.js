import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
//import { normalizedUsers } from "../../../constants/normalized-mock";
import { getUsers } from "./thunks/get-users";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: {},
    ids: [],
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload: users }) =>
      entityAdapter.setAll(state, users)
    ),
});
