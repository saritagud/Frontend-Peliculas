import { createAsyncThunk } from '@reduxjs/toolkit'
const { VITE_API_URL } = import.meta.env

export const fetchMovies = createAsyncThunk(
   'movies/fetchMovies',
   async (page = 1) => {
      const response = await fetch(`${ VITE_API_URL }movies?page=${page}`)
      return await response.json()
   }
)

export const filterMovies = createAsyncThunk(
   'movies/filterMovies',
   async search => {
      const response = await fetch(
         `${ VITE_API_URL }movies/filter/search`,
         {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(search)
         }
      )
      return await response.json()
   }
)

export const addMovie = createAsyncThunk(
   'movies/addMovie',
   async ({ datos }) => {
      const { data, token } = datos
      const response = await fetch(`${ VITE_API_URL }movies/create`, {
         headers: { Authorization: `Bearer ${token}` },
         method: 'POST',
         body: data
      })
      return await response.json()
   }
)

export const editMovie = createAsyncThunk(
   'movies/editMovie',
   async ({ datos }) => {
      const { body, movieID, token } = datos
      const response = await fetch(
         `${ VITE_API_URL }movies/update/${movieID}`,
         {
            headers: { Authorization: `Bearer ${token}` },
            method: 'PUT',
            body
         }
      )
      return await response.json()
   }
)

export const deleteMovie = createAsyncThunk(
   'movies/deleteMovie',
   async ({ datos }) => {
      const { movieID, token } = datos
      const response = await fetch(
         `${ VITE_API_URL }movies/delete/${movieID}`,
         {
            headers: { Authorization: `Bearer ${token}` },
            method: 'DELETE'
         }
      )
      return await response.json()
   }
)
