import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMoviesLastest = createAsyncThunk(
   'latestMovies/fetchMoviesLastest',
   async () => {
      const response = await fetch(
         'http://localhost:3000/movies/filter/latestMovies'
      )
      return await response.json()
   }
)
