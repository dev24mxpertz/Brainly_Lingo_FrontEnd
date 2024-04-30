import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axiosconfig";

// ACTIONS : api calls

// --------------------------------------------------------------------------------- auth  --------

export const SignUp_user = createAsyncThunk("auth/Signup", async (formData) => {
  try {
    const response = await axios.post(`Signup`, formData);
    console.log(response);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.message);
    return error.response.data.message;
  }
});

export const async_loaduser = createAsyncThunk(
  "auth/async_loaduser",
  async () => {
    const response = await axios.post(`me`);
    // console.log(response);
    return response.data.user;
  }
);

export const async_removeuser = createAsyncThunk(
  "auth/async_removeuser",
  async () => {
    const response = await axios.get(`signout`);
    // console.log(response)
    return response;
  }
);

export const Signin_user = createAsyncThunk(
  "auth/Signin_user",
  async (formData) => {
    try {
      const response = await axios.post(`Signin_user`, formData);
      console.log(response);
      return response.data;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Find_Email = createAsyncThunk("auth/Find_Email", async (Email) => {
  try {
    console.log(Email)
    const response = await axios.post(`FindUsername`, Email);
    console.log(response);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.message);
    return error.response.data.message;
  }
});

export const MatchOTP = createAsyncThunk(
  "auth/MatchOTP",
  async (data) => {
    try {
      console.log(data)
      const response = await axios.post(`MatchOTP`, data);
      // console.log(response);
      return response.data;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const Reset_Password = createAsyncThunk(
  "auth/Reset_Password",
  async (data) => {
    try {
      const response = await axios.post(`Reset_Password`, data);
      // console.log(response);
      return response.data;
    } catch (error) {
      // console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);







// -----
