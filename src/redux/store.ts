import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import authReducer from '@/redux/slices/authSlice';
import exampleReducer from '@/redux/slices/exampleSlice';
import pagesReducer from '@/redux/slices/pagesSlice';
import routeReducer from '@/redux/slices/routeSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    pages: pagesReducer,
    route: routeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
