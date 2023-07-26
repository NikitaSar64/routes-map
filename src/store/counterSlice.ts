import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

// @ts-ignore

const initialState = []

export const counterSlice = createSlice({
  name: "counter",
  // @ts-ignore
  initialState,
  // @ts-ignore
  reducers,
})

export default counterSlice.reducer
