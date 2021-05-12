import { createReducer } from '@reduxjs/toolkit'

export interface NewsState {}

const initialState = {} as NewsState

export const newsReducer = createReducer(initialState, (builder) => {})
