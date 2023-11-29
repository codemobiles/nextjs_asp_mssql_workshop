import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type AppState = {
  products: any[];
};

const initialState: AppState = {
  products: [],
};

export const load = createAsyncThunk("app/load", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const json = await result.json();
  return json;
});

const appSlice = createSlice({
  name: "app",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default appSlice.reducer;
