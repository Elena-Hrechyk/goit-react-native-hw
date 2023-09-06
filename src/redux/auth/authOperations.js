import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth, db } from "../../../config";

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

// export const registerDB = createAsyncThunk(
//   "auth/register",
//   async ({ email, password, login }) => {
//     try {
//       const resp = await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       if (user) {
//         await updateProfile(user, { displayName: login });
//       }
//       return resp;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

export const loginDB = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credentials.user;
    } catch (error) {
      throw error;
    }
  }
);
