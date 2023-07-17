import { createSlice } from '@reduxjs/toolkit'

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setPage: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { increment, decrement, setPage } = currentPageSlice.actions

export default currentPageSlice.reducer