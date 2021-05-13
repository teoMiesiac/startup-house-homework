import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

const newsStoreSelector = (state: RootState) => state.news

export const metaSelector = createSelector(newsStoreSelector, (news) => news.meta)
export const loadingSelector = createSelector(newsStoreSelector, (news) => news.loading)
export const dataSelector = createSelector(newsStoreSelector, (news) => news.data)
