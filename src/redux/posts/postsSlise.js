import { createSlice } from "@reduxjs/toolkit";

const postsSlise = createSlice({
  name: "posts",
  initialState: [],
  extraReducers: (builder) => builder,
});

export const postsReduser = postsSlise.reducer;
