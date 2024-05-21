import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { eatApi } from './eatApi';

export const store = configureStore({
  reducer: {
   
    [eatApi.reducerPath]: eatApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eatApi.middleware),
})

setupListeners(store.dispatch)