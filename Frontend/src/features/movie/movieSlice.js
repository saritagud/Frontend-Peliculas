import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
   name: 'movie',
   initialState: {
      movie: []
   },
   reducers: {
      editMovie: (state, action) => {
         const { id, title, description } = action.payload
         const movieIndex = state.findIndex(movie => movie.id === id);

         if (movieIndex === -1) {
            return state;
         }

         const newState = [...state];

         newState[movieIndex] = {
            ...newState[movieIndex],
            title,
            description
         };

         return newState
      },
   },
   extraReducers(builder) {
      builder.addCase(fetchMovie.fulfilled, (state, action) => {
         return action.payload
      })
   }
})

export const { editMovie } = movieSlice.actions

export const fetchMovie = createAsyncThunk('movie/fetchMovies', async (movieID) => {
   const response = await fetch(`http://localhost:3000/movies/${movieID}`)
   return await response.json()
})
export default movieSlice.reducer