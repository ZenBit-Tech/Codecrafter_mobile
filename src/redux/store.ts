import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from '@/redux/slices/exampleSlice';
import { routesApi } from '@/redux/slices/route/routeSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    [routesApi.reducerPath]: routesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
