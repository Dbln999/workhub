import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "auth/registration",
  async (userData) => {
    await axios.post("http://localhost:5000/auth/registration", {
      username: userData.username,
      password: userData.password,
    });
  }
);

let token;

export const loginUser = createAsyncThunk("auth/login", async (userData) => {
  await axios
    .post("http://localhost:5000/auth/login", {
      username: userData.username,
      password: userData.password,
    })
    .then((res) => (token = res.data.token));
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: { token: "", auth: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled.type, (state, action) => {
      state.auth = true;
      state.token = token;
    });
  },
});

export default authSlice.reducer;
export const {} = authSlice.actions;
