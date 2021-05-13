import { createAction } from '@reduxjs/toolkit'
import { NEWS_FETCH, NEWS_FETCH_SUCCESS, NEWS_FETCH_ERROR } from './constants'
import { GetResponse, GetParams } from 'api/marketaux/axios'

export const newsFetch = createAction<GetParams>(NEWS_FETCH)
export const newsFetchSuccess = createAction<GetResponse>(NEWS_FETCH_SUCCESS)
export const newsFetchError = createAction<any>(NEWS_FETCH_ERROR)
