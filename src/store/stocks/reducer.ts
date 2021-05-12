import { createReducer } from '@reduxjs/toolkit'

export interface StocksState {}

const initialState = {} as StocksState

export const stocksReducer = createReducer(initialState, (builder) => {})
