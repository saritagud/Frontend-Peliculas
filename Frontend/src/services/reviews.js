import { createAsyncThunk } from '@reduxjs/toolkit'
const { VITE_API_URL } = import.meta.env

export const fetchReviews = createAsyncThunk(
   'reviews/fetchReviews',
   async () => {
      const response = await fetch(`${ VITE_API_URL }comments`)
      return await response.json()
   }
)

export const addReview = createAsyncThunk(
   'reviews/addReview',
   async ({ datos }) => {
      const { body } = datos
      const response = await fetch(`${ VITE_API_URL }comments/new`, {
         method: 'POST',
         body
      })
      return await response.json()
   }
)

export const editReview = createAsyncThunk(
   'reviews/editReview',
   async ({ datos }) => {
      const { body, reviewID } = datos
      const response = await fetch(
         `${ VITE_API_URL }comments/update/${reviewID}`,
         {
            method: 'PUT',
            body
         }
      )
      return await response.json()
   }
)

export const deleteReview = createAsyncThunk(
   'reviews/deleteReview',
   async ({ datos }) => {
      const { body, reviewID } = datos
      const response = await fetch(
         `${ VITE_API_URL }comments/delete/${reviewID}`,
         {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
         }
      )
      return await response.json()
   }
)
