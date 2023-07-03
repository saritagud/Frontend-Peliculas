import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: []
   },
   reducers: {
      addMovie: (state, action) => {
         return [...state, action.payload]
      },
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
      deleteMovie: (state, action) => {
         return state.filter(state => state.id !== action.payload)
      }
   },
   extraReducers(builder) {
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
         return action.payload
      })
   }
})

export const { addMovie, editMovie, deleteMovie } = moviesSlice.actions
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await fetch('http://localhost:3000/movies')
   return await response.json()
})
export default moviesSlice.reducer