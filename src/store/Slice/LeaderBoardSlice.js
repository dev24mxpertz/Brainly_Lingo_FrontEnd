import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { Fetch_LeaderBoardData_For_Current_Weeked } from "../Actions/LeaderBoardActions";

let initialState = {
LeaderBoardData : [],
loading:false
};

const LeaderBoardSlice = createSlice({
  name: "LeaderBoard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetch_LeaderBoardData_For_Current_Weeked.pending, (state) => {
        state.loading = true;
      })
      .addCase(Fetch_LeaderBoardData_For_Current_Weeked.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          console.log(action.payload);
          state.LeaderBoardData = action.payload.data.foundData;
          state.loading = false;
        } else {
          toast.error(action.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
          });
        }
      })
      .addCase(Fetch_LeaderBoardData_For_Current_Weeked.rejected, (state) => {
        state.loading = false;
      })
     
  },
});

export default LeaderBoardSlice.reducer;
