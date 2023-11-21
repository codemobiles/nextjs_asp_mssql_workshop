import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  reducers: {},
  initialState: { count: 0 },
});

export default userSlice.reducer;
