import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./authTypes";

const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  error: null,
  firstName: localStorage.getItem("firstName") || null,
  userEmail: localStorage.getItem("email") || null,
  accessToken: localStorage.getItem("token") || null,
};

export const loginUser = createAsyncThunk(
  "login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      // Make the API call here (replace with your actual implementation)
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);
export const createUser = createAsyncThunk(
  "login",
  async ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      // Make the API call here (replace with your actual implementation)
      const response = await fetch("localhost:4000/api/v1/user/create-user", {
        method: "POST",
        body: JSON.stringify({ email, password,firstName, lastName}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string | null>) => {
      state.firstName = action.payload;
    },
    setUserEmail: (
      state,
      action: PayloadAction<{ data: { email: string | null } }>
    ) => {
      state.userEmail = action.payload?.data.email;
    },
    setAccessToken: (
      state,
      action: PayloadAction<{ data: { accessToken: string | null } }>
    ) => {
      state.accessToken = action.payload?.data?.accessToken;
      localStorage.setItem(
        "accessToken",
        action.payload?.data?.accessToken || ""
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.userEmail = action.payload.data.email;
      state.accessToken = action.payload.data.accessToken;
      state.firstName = action.payload.data.userDetails.firstName;
      localStorage.setItem("token", action.payload.data.accessToken);
      localStorage.setItem("email", action.payload.data.email);
      localStorage.setItem(
        "firstName",
        action.payload.data.userDetails.firstName
      );
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Login failed";
    });
  },
});

export const { setAccessToken, setUserEmail, setFirstName } = authSlice.actions;

export default authSlice.reducer;
