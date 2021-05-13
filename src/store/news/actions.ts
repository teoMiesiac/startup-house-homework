import { createAction } from '@reduxjs/toolkit'
import { NEWS_FETCH, NEWS_FETCH_SUCCESS, NEWS_FETCH_ERROR } from './constants'
import { getResponse } from 'api/marketaux/axios'

export const newsFetch = createAction(NEWS_FETCH)
export const newsFetchSuccess = createAction<getResponse>(NEWS_FETCH_SUCCESS)
export const newsFetchError = createAction<any>(NEWS_FETCH_ERROR)
