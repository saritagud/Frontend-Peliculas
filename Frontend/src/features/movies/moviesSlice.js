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
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(addMovie.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(addMovie.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });
    builder.addCase(addMovie.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(editMovie.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(editMovie.fulfilled, (state, action) => {
      state.status = "succeeded";
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
        movies: newMovies,
      };
    });
    builder.addCase(editMovie.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(deleteMovie.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      state.status = "succeeded";
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie._id !== action.payload._id
        ),
      };
    });
    builder.addCase(deleteMovie.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(fetchMoviesLastest.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchMoviesLastest.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    });
    builder.addCase(fetchMoviesLastest.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
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

export const addMovie = createAsyncThunk("movies/addMovie", async (data) => {
  const response = await fetch("http://localhost:3000/movies/create", {
    method: "POST",
    body: data,
  });
  return await response.json();
});

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ datos }) => {
    const { body, movieID } = datos;
    const response = await fetch(
      `http://localhost:3000/movies/update/${movieID}`,
      {
        method: "PUT",
        body,
      }
    );
    return await response.json();
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieID) => {
    const response = await fetch(
      `http://localhost:3000/movies/delete/${movieID}`,
      {
        method: "DELETE",
      }
    );
    return await response.json();
  }
);

export const fetchMoviesLastest = createAsyncThunk(
  "movies/fetchMoviesLastest",
  async () => {
    const response = await fetch("http://localhost:3000/filter/latestMovies");
    return await response.json();
  }
);

export default moviesSlice.reducer;
