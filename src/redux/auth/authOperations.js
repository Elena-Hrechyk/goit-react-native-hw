import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../../config";

export const registerDB = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName: name });
      }

      return createUser;
    } catch (error) {
      throw error;
    }
  }
);

export const loginDB = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
        }
      });

      return credentials.user;
    } catch (error) {
      throw error;
    }
  }
);

export const logoutDB = createAsyncThunk("auth/logout", async () => {
  try {
    const data = await signOut(auth);
    return data;
  } catch (err) {
    throw err;
  }
});
