import { configureStore } from '@reduxjs/toolkit'
import { newsReducer } from 'store/news/reducer'
import { stocksReducer } from 'store/stocks/reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    news: newsReducer,
    stocks: stocksReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
