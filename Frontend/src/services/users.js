import { createAsyncThunk } from '@reduxjs/toolkit'
const { VITE_API_URL } = import.meta.env

export const login = createAsyncThunk('user/login', async user => {
   const response = await fetch(`${ VITE_API_URL }users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   })
   return await response.json()
})

export const register = createAsyncThunk('user/register', async user => {
   const response = await fetch(`${ VITE_API_URL }users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   })
   return await response.json()
})
