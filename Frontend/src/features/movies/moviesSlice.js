import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle", 
    error: null, 
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      return {
          ...state,
          status: 'loading'
      }
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return {
          ...state,
          status: "succeeded",
          movies: action.payload.movies,
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages
      }
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      return {
          ...state,
          status: 'failed',
          error: action.error.message
      }
    });

    builder.addCase(filterMovies.pending, (state) => {
      return {
          ...state,
          status: 'loading'
      }
    });
    builder.addCase(filterMovies.fulfilled, (state, action) => {
      return {
          ...state,
          status: "succeeded",
          movies: action.payload,
      }
    });
    builder.addCase(filterMovies.rejected, (state, action) => {
      return {
          ...state,
          status: 'failed',
          error: action.error.message
      }
    });

    builder.addCase(addMovie.pending, (state) => {
      return {
          ...state,
          status: 'loading'
      }
    });
    builder.addCase(addMovie.fulfilled, (state, action) => {
      return {
        ...state,
        status: "succeeded",
        movies: [action.payload, ...state.movies.slice(0, state.movies.length - 1)]
     }
    });
    builder.addCase(addMovie.rejected, (state, action) => {
      return {
          ...state,
          status: 'failed',
          error: action.error.message
      }
    });

    builder.addCase(editMovie.pending, (state) => {
      return {
          ...state,
          status: 'loading'
      }
    });
    builder.addCase(editMovie.fulfilled, (state, action) => {
      const { _id } = action.payload;
      const update = action.payload;
      const movieIndex = state.movies.findIndex((movie) => movie._id === _id);

      if (movieIndex === -1) {
        return state;
      }

      const newMovies = [...state.movies];
      newMovies[movieIndex] = update;

      return {
        ...state,
        status: "succeeded",
        movies: newMovies,
      };
    });
    builder.addCase(editMovie.rejected, (state, action) => {
      return {
          ...state,
          status: 'failed',
          error: action.error.message
      }
    });

    builder.addCase(deleteMovie.pending, (state) => {
      return {
          ...state,
          status: 'loading'
      }
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      return {
        ...state,
        status: "succeeded",
        movies: state.movies.filter(
          (movie) => movie._id !== action.payload._id
        ),
      };
    });
    builder.addCase(deleteMovie.rejected, (state, action) => {
      return {
          ...state,
          status: 'failed',
          error: action.error.message
      }
    });
  },
});

// Por si llega hacer falta un action ⬇️
// export const {  } = moviesSlice.actions

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page = 1) => {
    const response = await fetch(`http://localhost:3000/movies?page=${page}`);
    return await response.json();
  }
);

export const filterMovies = createAsyncThunk("movies/filterMovies", async (search) => {
  const response = await fetch("http://localhost:3000/movies/filter/search", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(search)
  });
  return await response.json();
});

export const addMovie = createAsyncThunk("movies/addMovie", async ({ datos }) => {
  const { data, token } = datos;
  const response = await fetch("http://localhost:3000/movies/create", {
    headers: { Authorization: `Bearer ${token}` },
    method: "POST",
    body: data,
  });
  return await response.json();
});

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ datos }) => {
    const { body, movieID, token } = datos;
    const response = await fetch(
      `http://localhost:3000/movies/update/${movieID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method: "PUT",
        body,
      }
    );
    return await response.json();
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async ({datos}) => {
    const { movieID, token } = datos;
    const response = await fetch(
      `http://localhost:3000/movies/delete/${movieID}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method: "DELETE",
      }
    );
    return await response.json();
  }
);

export default moviesSlice.reducer;
