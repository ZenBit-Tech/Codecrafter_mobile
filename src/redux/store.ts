import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import authReducer from '@/redux/slices/authSlice';
import exampleReducer from '@/redux/slices/exampleSlice';
import ordersReducer from '@/redux/slices/orderSlice';
import pagesReducer from '@/redux/slices/pagesSlice';
import routeReducer from '@/redux/slices/routeSlice';
import unreadNotificationsSlice from '@/redux/slices/unreadNotificationsSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    pages: pagesReducer,
    route: routeReducer,
    auth: authReducer,
    orders: ordersReducer,
    unreadNotifications: unreadNotificationsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
