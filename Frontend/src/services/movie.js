import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMovie = createAsyncThunk(
   'movie/fetchMovie',
   async movieID => {
      const response = await fetch(`http://localhost:3000/movies/${movieID}`)
      return await response.json()
   }
)

export const addReview = createAsyncThunk(
   'movie/addReview',
   async ({ datos }) => {
      const { body, movieID } = datos
      const response = await fetch(
         `http://localhost:3000/comments/new/${movieID}`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
         }
      )
      return await response.json()
   }
)

export const deleteReview = createAsyncThunk(
   'movie/deleteReview',
   async ({ datos }) => {
      const { body, reviewID } = datos
      const response = await fetch(
         `http://localhost:3000/comments/delete/${reviewID}`,
         {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
         }
      )
      return await response.json()
   }
)
