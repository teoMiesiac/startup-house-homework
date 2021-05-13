import { newsFetch, newsFetchError, newsFetchSuccess } from './actions'
import { createReducer } from '@reduxjs/toolkit'
import { News } from 'models'

interface Meta {
  found: number
  limit: number
  page: number
}

export interface NewsState {
  meta: Meta
  loading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  data: News[]
}

const initialState = {
  meta: {} as Meta,
  loading: false,
  data: [] as News[],
  error: null,
} as NewsState

export const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(newsFetch, (state) => {
    state.loading = true
  })
  builder.addCase(newsFetchSuccess, (state, { payload: { data, meta } }) => {
    state.data = data
    state.meta = meta
    state.loading = false
    state.error = false
  })
  builder.addCase(newsFetchError, (state) => {
    state.loading = false
  })
})
