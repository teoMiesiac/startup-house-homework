/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeLatest, AllEffect, ForkEffect } from 'redux-saga/effects'
import { getNews } from 'api/marketaux/axios'
import { newsFetchSuccess, newsFetchError } from './actions'
import { NEWS_FETCH } from './constants'

function* fetchNews() {
  try {
    const { data } = yield call(getNews)
    yield put(newsFetchSuccess(data))
  } catch (e) {
    yield put(newsFetchError)
  }
}

export function* newsSagas() {
  yield all([takeLatest(NEWS_FETCH, fetchNews)])
}
