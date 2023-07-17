import { createSlice } from '@reduxjs/toolkit'

export const currentDbItem = createSlice({
  name: 'currentDbItem',
  initialState: {
    value: null,
  },
  reducers: {
    setItem: (state, action) => {
        state.value = action.payload
    }
  },
})

export const { setItem } = currentDbItem.actions

export default currentDbItem.reducer