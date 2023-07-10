import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesLastest } from "../../services/latestMovies";

export const latestMoviesSlice = createSlice({
  name: "latestMovies",
  initialState: {
    latestMovies: [],
    status: "idle", 
    error: null, 
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMoviesLastest.pending, (state) => {
        return {
            ...state,
            status: 'loading'
        }
    });
    builder.addCase(fetchMoviesLastest.fulfilled, (state, action) => {
        return {
            ...state,
            status: "succeeded",
            latestMovies: action.payload
        }
    });
    builder.addCase(fetchMoviesLastest.rejected, (state, action) => {
        return {
            ...state,
            status: 'failed',
            error: action.error.message
        }
    });
  },
});

// Por si llega hacer falta un action ⬇️
// export const {  } = latestMoviesSlice.actions

export default latestMoviesSlice.reducer;
