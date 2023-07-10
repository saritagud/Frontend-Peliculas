import { createSlice } from "@reduxjs/toolkit";
import { addReview, deleteReview, fetchMovie } from "../../services/movie";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovie.pending, (state) => {
      return {
        ...state,
        status: 'loading'
      }
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      return {
        ...state,
        status: "succeeded",
        movie: action.payload
      }
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.error.message
      }
    });

    builder.addCase(addReview.pending, (state) => {
      return {
        ...state,
        status: 'loading'
      }
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      return {
        ...state,
        status: "succeeded",
        movie: {
          ...state.movie,
          comentarios: [...state.movie.comentarios, action.payload.newComment]
        }
      }
    });
    builder.addCase(addReview.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.error.message
      }
    });
    
    builder.addCase(deleteReview.pending, (state) => {
      return {
        ...state,
        status: 'loading'
      }
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      return {
        ...state,
        status: "succeeded",
        movie: {
          ...state.movie,
          comentarios: state.movie.comentarios.filter(
            (review) => review._id !== action.payload
          ),
        }
      }
    })
    builder.addCase(deleteReview.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.error.message
      }
    });
  },
});

// Por si llega hacer falta un action ⬇️
// export const {  } = movieSlice.actions

export default movieSlice.reducer;
