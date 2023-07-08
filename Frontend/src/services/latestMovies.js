import { createAsyncThunk } from '@reduxjs/toolkit'
const { VITE_API_URL } = import.meta.env

export const fetchMoviesLastest = createAsyncThunk(
   'latestMovies/fetchMoviesLastest',
   async () => {
      const response = await fetch(
         `${ VITE_API_URL }movies/filter/latestMovies`
      )
      return await response.json()
   }
)
