import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (movieID) => {
    const response = await fetch(`http://localhost:3000/movies/${movieID}`);
    return await response.json();
  }
);

export const addReview = createAsyncThunk(
  "movie/addReview",
  async ({ datos }) => {
    const { body, movieID } = datos;
    const response = await fetch(
      `http://localhost:3000/comments/new/${movieID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    return await response.json();
  }
);

export const deleteReview = createAsyncThunk(
  "movie/deleteReview",
  async ({ datos }) => {
    const {body, reviewID} = datos
    const response = await fetch(
      `http://localhost:3000/comments/delete/${reviewID}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );
    return await response.json();
  }
);

export default movieSlice.reducer;
