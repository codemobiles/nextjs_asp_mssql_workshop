import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SignAction {
  username: string;
  password: string;
}

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

export const signIn = createAsyncThunk("user/signin", (user: SignAction) => {
  alert(JSON.stringify(user));
});

export const signOut = createAsyncThunk("user/signOut", async () => {});

interface UserState {
  count: number;
}

const initialState: UserState = { count: 0 };

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
  initialState,
});

export default userSlice.reducer;
export const { add, remove } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
