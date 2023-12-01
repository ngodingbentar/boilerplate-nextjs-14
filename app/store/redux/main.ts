import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    count: 1,
  },
  reducers: {
    plus: (state) => {
      state.count++
    },
    minus: (state) => {
      state.count--
    }
  }
})

export const { plus, minus } = mainSlice.actions
export default mainSlice.reducer