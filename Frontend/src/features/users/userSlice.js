import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      token: "",
      usuario: "",
      rol: "",
    },
    status: {
      login: "idle",
      register: "idle",
    },
  },
  reducers: {
    logout: (state) => {
      state.user = {
        token: "",
        usuario: "",
        rol: "",
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.status.login = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status.login = "succeeded";
      const { token, usuario, isAdmin } = action.payload;
      state.user = {
        token,
        usuario,
        isAdmin,
      };
      localStorage.setItem("token", JSON.stringify(token))
    });
    builder.addCase(login.rejected, (state) => {
      state.status.login = "failed";
    });
    builder.addCase(register.pending, (state) => {
      state.status.register = "loading";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status.register = "succeeded";
      const { token, usuario, isAdmin } = action.payload;
      state.user = {
        token,
        usuario,
        isAdmin,
      };
      localStorage.setItem("token", JSON.stringify(token))
    });
    builder.addCase(register.rejected, (state) => {
      state.status.register = "failed";
    });
  },
});

export const { logout } = userSlice.actions;

export const login = createAsyncThunk("user/login", async (user) => {
  const response = await fetch(`http://localhost:3000/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
});

export const register = createAsyncThunk("user/register", async (user) => {
  const response = await fetch(`http://localhost:3000/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
});

export default userSlice.reducer;
