import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
   name: 'movie',
   initialState: {
      movie: []
   },
   reducers: {},
   extraReducers(builder) {
      builder.addCase(fetchMovie.fulfilled, (state, action) => {
         return action.payload
      })
   }
})

// Por si llega hacer falta un action ⬇️
// export const {  } = movieSlice.actions

export const fetchMovie = createAsyncThunk('movie/fetchMovies', async (movieID) => {
   const response = await fetch(`http://localhost:3000/movies/${movieID}`)
   return await response.json()
})
export default movieSlice.reducer