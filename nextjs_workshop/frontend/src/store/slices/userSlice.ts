import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserData } from "@/models/user.model";
import build from "next/dist/build";
import * as serverService from "@/services/serverService";

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

// SignIn
export const signIn = createAsyncThunk(
  "user/signin",
  async (user: SignAction) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const result = await serverService.signIn(user);
    return result;
  }
);

// SignUp
export const signUp = createAsyncThunk(
  "user/signup",
  async (user: SignAction) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const result = await serverService.signUp(user);
    return result;
  }
);

export const signOut = createAsyncThunk("user/signOut", async () => {
  await serverService.signOut();
});

export const getSession = createAsyncThunk("user/fetchSession", async () => {
  // await new Promise((resolve) => setTimeout(resolve, 300));
  const response = await serverService.getSession();
  return response;
});

interface UserState {
  username: string;
  error?: string;
  status: "fetching" | "success" | "failed" | "init";
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  count: number;
  user?: UserData;
}

const initialState: UserState = {
  username: "",
  status: "init",
  isAuthenticated: false,
  isAuthenticating: true,
  count: 0,
};

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
    // Add
    builder.addCase(addAsync.fulfilled, (state, action) => {
      state.count = state.count + action.payload;
    });

    // Reset
    builder.addCase(resetAsync.fulfilled, (state, action) => {
      state.count = action.payload;
    });

    // SignIn (Fullfilled)
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.error = undefined;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.status = "success";
    });

    // SignIn (Rejected)
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.error.message;
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.status = "failed";
    });

    // SignIn (Inprogress or Pending)
    builder.addCase(signIn.pending, (state, action) => {
      state.error = undefined;
      state.status = "fetching";
    });
  },
  initialState,
});

export default userSlice.reducer;
export const { add, remove } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
