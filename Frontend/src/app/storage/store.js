import moviesReducer from '../../features/movies/moviesSlice'
import movieReducer from '../../features/movie/movieSlice'
import userReducer from '../../features/users/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
   reducer: {
      movies: moviesReducer,
      movie: movieReducer,
      user: userReducer
   }
})