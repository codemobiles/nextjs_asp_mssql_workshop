import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserData } from "@/models/user.model";
import build from "next/dist/build";

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
    const response = await fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    if (!result.token) {
      throw new Error("Invalid username or password");
    }

    return result;
  }
);

// SignUp
export const signUp = createAsyncThunk(
  "user/signup",
  async (user: SignAction) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const response = await fetch("http://localhost:8081/api/v1/Auth/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    if (result.result != "ok") {
      throw new Error("Invalid username or password");
    }

    return result;
  }
);

export const signOut = createAsyncThunk("user/signOut", async () => {});

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
