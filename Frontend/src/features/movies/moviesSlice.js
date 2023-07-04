import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: []
   },
   reducers: {},
   extraReducers(builder) {
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
         return action.payload
      })
      builder.addCase(addMovie.fulfilled, (state, action) => {
         return {
            ...state,
            movies: [action.payload, ...state.movies.slice(0, state.movies.length - 1)]
         }
      })
      builder.addCase(editMovie.fulfilled, (state, action) => {
         const { _id } = action.payload
         const update = action.payload
         const movieIndex = state.movies.findIndex(movie => movie._id === _id);

         if (movieIndex === -1) {
            return state;
         }

         const newMovies = [...state.movies];
         newMovies[movieIndex] = update
         
         return {
            ...state,
            movies: newMovies
         }
      })
      builder.addCase(deleteMovie.fulfilled, (state, action) => {
         return {
            ...state,
            movies: state.movies.filter(movie => movie._id !== action.payload._id)
         }
      })
   }
})

// Por si llega hacer falta un action ⬇️
// export const {  } = moviesSlice.actions

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page = 1) => {
   const response = await fetch(`http://localhost:3000/movies?page=${page}`)
   return await response.json()
})

export const addMovie = createAsyncThunk('movies/addMovie', async (data) => {
   const response = await fetch('http://localhost:3000/movies/create',{
      method: 'POST',
      body: data
   })
   return await response.json()
})

export const editMovie = createAsyncThunk('movies/editMovie', async ({datos}) => {
   const { body, movieID } = datos
   const response = await fetch(`http://localhost:3000/movies/update/${movieID}`,{
      method: 'PUT',
      body
   })
   return await response.json()
})

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (movieID) => {
   const response = await fetch(`http://localhost:3000/movies/delete/${movieID}`,{
      method: 'DELETE',
   })
   return await response.json()
})

export default moviesSlice.reducer