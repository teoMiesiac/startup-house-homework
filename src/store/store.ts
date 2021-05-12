import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "store/news/reducer";
import { stocksReducer } from "store/stocks/reducer";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    stocks: stocksReducer,
  },
});
