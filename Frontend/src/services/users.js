import { createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk('user/login', async user => {
   const response = await fetch(`http://localhost:3000/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   })
   return await response.json()
})

export const register = createAsyncThunk('user/register', async user => {
   const response = await fetch(`http://localhost:3000/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   })
   return await response.json()
})
