import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { filterByStatus } = filterSlice.actions;

export default filterSlice.reducer;
