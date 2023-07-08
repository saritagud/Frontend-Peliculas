import { createSlice } from "@reduxjs/toolkit";
import { decodeToken } from "react-jwt";
import { login, register } from "../../services/users";

const tokenLs = JSON.parse(localStorage.getItem('token'))

let initUser = {
  token: "",
  usuario: "",
  isAdmin: false,
}

if (tokenLs) {
  const { usuario, isAdmin} = decodeToken(tokenLs).data
  initUser = {
    token: tokenLs,
    usuario,
    isAdmin,
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initUser,
    status: {
      login: "idle",
      register: "idle",
    },
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      state.user = {
        token: "",
        usuario: "",
        isAdmin: false,
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

export default userSlice.reducer;
