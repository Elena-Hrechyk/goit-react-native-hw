import { createSlice } from "@reduxjs/toolkit";
// import { fetchCurrentUser, logIn, logOut, register } from "./operations-auth";
import { registerDB } from "./authOperations";

const initialState = {
  user: { name: null, email: null, uid: null },
  token: null,
  isLogin: false,
  isUpdating: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(registerDB.fulfilled, (state, action) => {
      state.user.name = action.payload.user.displayName;
      state.user.email = action.payload.user.email;
      state.token = action.payload.user.accessToken;
      state.user.uid = action.payload.user.uid;
      state.isLogin = true;
    }),
  // [logIn.fulfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLogin = true;
  // },
  // [logOut.fulfilled](state, action) {
  //   state.user = { username: null, email: null };
  //   state.token = null;
  //   state.isLogin = false;
  // },
  // [fetchCurrentUser.pending](state) {
  //   state.isUpdating = true;
  // },
  // [fetchCurrentUser.fulfilled](state, action) {
  //   state.user = action.payload;
  //   state.isLogin = true;
  //   state.isUpdating = false;
  // },
  // [fetchCurrentUser.rejected](state) {
  //   state.isUpdating = false;
  // },
});

export const authReducer = authSlice.reducer;
