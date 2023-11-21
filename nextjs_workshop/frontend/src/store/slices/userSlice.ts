import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  reducers: {
    add: (state) => {
      state.count++;
    },
    remove: (state) => {
      state.count--;
    },
  },
  initialState: { count: 10 },
});

export default userSlice.reducer;
export const { add, remove } = userSlice.actions;
