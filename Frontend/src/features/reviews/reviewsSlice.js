import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    status: "idle", 
    error: null, 
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReviews.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.reviews = action.payload;
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(addReview.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.reviews = action.payload;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(editReview.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(editReview.fulfilled, (state, action) => {
      state.status = "succeeded";
      const { _id } = action.payload;
      const update = action.payload;
      const movieIndex = state.reviews.findIndex((movie) => movie._id === _id);

      if (movieIndex === -1) {
        return state;
      }

      const newReviews = [...state.reviews];
      newReviews[movieIndex] = update;

      return {
        ...state,
        Reviews: newReviews,
      };
    });
    builder.addCase(editReview.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    builder.addCase(deleteReview.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.status = "succeeded";
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review._id !== action.payload._id
        ),
      };
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

// Por si llega hacer falta un action ⬇️
// export const {  } = ReviewsSlice.actions

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const response = await fetch("http://localhost:3000/comentarios");
    return await response.json();
  }
);

export const addReview = createAsyncThunk(
    "reviews/addReview",
    async ({ datos }) => {
      const { body, reviewID } = datos;
      const response = await fetch(
        `http://localhost:3000/new/${reviewID}`,
        {
          method: "PUT",
          body,
        }
      );
      return await response.json();
    }
  );

export const editReview = createAsyncThunk(
  "reviews/editReview",
  async ({ datos }) => {
    const { body, reviewID } = datos;
    const response = await fetch(
      `http://localhost:3000/update/${reviewID}`,
      {
        method: "PUT",
        body,
      }
    );
    return await response.json();
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (reviewID) => {
    const response = await fetch(
      `http://localhost:3000/delete/${reviewID}`,
      {
        method: "DELETE",
      }
    );
    return await response.json();
  }
);

export default ReviewsSlice.reducer;
