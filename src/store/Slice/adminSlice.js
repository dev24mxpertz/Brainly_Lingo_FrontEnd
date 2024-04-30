import { createSlice } from "@reduxjs/toolkit";
import { imageUpload } from "../Actions/adminActions";

let intialState = {
  loading:false
};

const AdminSlice = createSlice({
  name: "Admin",
  initialState: intialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(imageUpload.pending, (state) => {
        state.loading = true;
      })
      .addCase(imageUpload.fulfilled, (state, action) => {
        // state.AllFantary = action.payload
        state.loading = false;
      })
      .addCase(imageUpload.rejected, (state) => {
        state.loading = false;
      })
  },
});

// export const { } = FantarySlice.actions;
export default AdminSlice.reducer;
