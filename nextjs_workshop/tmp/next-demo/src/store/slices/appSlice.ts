import { createSlice } from "@reduxjs/toolkit";

type AppState = {
  products: any[];
};

const initialState: AppState = {
  products: [],
};

export const load = () => {};

const appSlice = createSlice({
  name: "app",
  reducers: {},
  initialState,
});

export default appSlice.reducer;
