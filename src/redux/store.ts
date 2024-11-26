import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from '@/redux/slices/exampleSlice';
import pagesReducer from '@/redux/slices/pagesSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
