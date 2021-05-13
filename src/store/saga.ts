import { all, spawn } from 'redux-saga/effects'
import { newsSagas } from './news/sagas'

export function* rootSaga() {
  yield spawn(newsSagas)
}
