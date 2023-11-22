import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addAsync = createAsyncThunk("user/addAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 2;
});

export const resetAsync = createAsyncThunk(
  "user/resetAsync",
  async (resetValue: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return resetValue;
  }
);

const userSlice = createSlice({
  name: "user",
  reducers: {
    add: (state) => {
      state.count++; // synchronized
    },
    remove: (state) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.count = state.count + action.payload;
    });

    builder.addCase(resetAsync.fulfilled, (state, action) => {
      state.count = action.payload;
    });
  },
  initialState: { count: 10 },
});

export default userSlice.reducer;
export const { add, remove } = userSlice.actions;
