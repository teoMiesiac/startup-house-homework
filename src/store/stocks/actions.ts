import { createAction } from '@reduxjs/toolkit'
import { STOCKS_FETCH } from './constants'

export const stocksFetch = createAction(STOCKS_FETCH)
