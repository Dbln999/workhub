import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice.js";

const rootReducer = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
