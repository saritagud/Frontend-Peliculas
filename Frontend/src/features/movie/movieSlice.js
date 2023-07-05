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
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movie = action.payload;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

// Por si llega hacer falta un action ⬇️
// export const {  } = movieSlice.actions

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovies",
  async (movieID) => {
    const response = await fetch(`http://localhost:3000/movies/${movieID}`);
    return await response.json();
  }
);
export default movieSlice.reducer;
