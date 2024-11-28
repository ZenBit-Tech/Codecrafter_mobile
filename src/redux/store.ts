import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import authReducer from '@/redux/slices/authSlice';
import exampleReducer from '@/redux/slices/exampleSlice';
import routesReducer from '@/redux/slices/route/routeSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    routes: routesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
