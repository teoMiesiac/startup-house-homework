import { ForkEffect, spawn } from 'redux-saga/effects'
import { newsSagas } from './news/sagas'

export function* rootSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield spawn(newsSagas)
}
