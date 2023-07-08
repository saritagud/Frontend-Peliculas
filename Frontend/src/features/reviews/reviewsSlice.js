import { createSlice } from "@reduxjs/toolkit";
import { addReview, deleteReview, editReview, fetchReviews } from "../../services/reviews";

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    status: "idle", 
    error: null, 
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReviews.pending, (state) => {
      return {
        ...state,
        status: 'loading'
      }
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        reviews: action.payload
      }
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
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
        reviews: [action.payload, ...state.reviews.slice(0, state.reviews.length - 1)]
      }
    });
    builder.addCase(addReview.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.error.message
      }
    });

    builder.addCase(editReview.pending, (state) => {
      return {
        ...state,
        status: 'loading'
      }
    });
    builder.addCase(editReview.fulfilled, (state, action) => {
      state.status = "succeeded";
      const { _id } = action.payload;
      const update = action.payload;
      const reviewIndex = state.reviews.findIndex((review) => review._id === _id);

      if (reviewIndex === -1) {
        return state;
      }

      const newReviews = [...state.reviews];
      newReviews[reviewIndex] = update;

      return {
        ...state,
        reviews: newReviews,
      };
    });
    builder.addCase(editReview.rejected, (state, action) => {
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
        reviews: state.reviews.filter(
          (review) => review._id !== action.payload
        ),
      };
    });
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
// export const {  } = ReviewsSlice.actions

export default ReviewsSlice.reducer;
