/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, AllEffect, call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import { getNews } from 'api/marketaux/axios'
import { newsFetch, newsFetchSuccess, newsFetchError } from './actions'
import { NEWS_FETCH } from './constants'

function* fetchNews({ payload: { page } }: ReturnType<typeof newsFetch>) {
  try {
    const { data } = yield call(getNews, { page })
    yield put(newsFetchSuccess(data))
  } catch (e) {
    yield put(newsFetchError)
  }
}

export function* newsSagas(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(NEWS_FETCH, fetchNews)])
}
