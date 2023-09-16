import { createSlice } from "@reduxjs/toolkit";
import { registerDB, loginDB, logoutDB } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isUpdating: false,
  isGoingToLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerDB.pending, (state, _) => {
        state.isGoingToLogin = true;
      })
      .addCase(registerDB.fulfilled, (state, action) => {
        state.user.name = action.payload.user.displayName;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
        state.user.uid = action.payload.user.uid;
        state.isLogin = true;
        state.isGoingToLogin = false;
      })
      .addCase(
        registerDB.rejected,
        (state, _) => (state.isGoingToLogin = false)
      )
      .addCase(loginDB.pending, (state, _) => {
        state.isGoingToLogin = true;
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;
        state.isLogin = true;
        state.isGoingToLogin = false;
      })
      .addCase(loginDB.rejected, (state, _) => (state.isGoingToLogin = false))
      .addCase(logoutDB.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLogin = false;
      }),
});

export const authReducer = authSlice.reducer;
