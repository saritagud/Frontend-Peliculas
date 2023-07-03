import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      user: {
         token: '',
         usuario: '',
         rol: ''
      }
   },
   reducers: {
      logout: (state, action) => {
         return state.user = {
            token: '',
            usuario: '',
            rol: ''
         }
      }
   },
   extraReducers(builder) {
      builder.addCase(login.fulfilled, (state, action) => {
         return action.payload
      })
      builder.addCase(register.fulfilled, (state, action) => {
         return action.payload
      })
   }
})

export const { logout } = userSlice.actions

export const login = createAsyncThunk('user/login', async (user) => {
   const response = await fetch(`http://localhost:3000/users/login`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   })
   return await response.json()
})

export const register = createAsyncThunk('user/register', async (user) => {
   const response = await fetch(`http://localhost:3000/users/signup`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   })
   return await response.json()
})

export default userSlice.reducer