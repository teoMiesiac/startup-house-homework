import { createReducer } from '@reduxjs/toolkit'
import { stocksFetch } from './actions'
export interface StocksState {
  data: any
}

const initialState = {} as StocksState

export const stocksReducer = createReducer(initialState, (builder) => {
  builder.addCase(stocksFetch, (state) => {
    state.data = {}
  })
})
