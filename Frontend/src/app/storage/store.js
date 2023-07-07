import latestMoviesReducer from '../../features/latestMovies/latestMovies'
import moviesReducer from '../../features/movies/moviesSlice'
import reviewsReducer from '../../features/reviews/reviewsSlice'
import movieReducer from '../../features/movie/movieSlice'
import userReducer from '../../features/users/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
   reducer: {
      latestMovies: latestMoviesReducer,
      movies: moviesReducer,
      movie: movieReducer,
      user: userReducer,
      reviews: reviewsReducer,
   }
})