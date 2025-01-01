import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import choseOrderSlice from './slices/choseOrderSlice';
import currentCustomerIdSlice from './slices/currentCustomerIdSlice';

import authReducer from '@/redux/slices/authSlice';
import exampleReducer from '@/redux/slices/exampleSlice';
import ordersReducer from '@/redux/slices/orderSlice';
import pagesReducer from '@/redux/slices/pagesSlice';
import routeReducer from '@/redux/slices/routeSlice';
import tokenModalSlice from '@/redux/slices/tokenModalSlice';
import unreadNotificationsSlice from '@/redux/slices/unreadNotificationsSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    pages: pagesReducer,
    route: routeReducer,
    auth: authReducer,
    orders: ordersReducer,
    unreadNotifications: unreadNotificationsSlice,
    tokenModal: tokenModalSlice,
    choseOrder: choseOrderSlice,
    currentCustomerId: currentCustomerIdSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
