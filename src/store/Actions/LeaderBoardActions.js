import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../helper/axiosconfig";

export const Fetch_LeaderBoardData_For_Current_Weeked = createAsyncThunk(
  "LeaderBoard/Fetch_LeaderBoardData_For_Current_Weeked",
  async () => {
    try {
      const response = await axios.get(`Fetch_LeaderBoardData_For_Current_Weeked`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.response.data.message);
      return error.response.data.message;
    }
  }
);
