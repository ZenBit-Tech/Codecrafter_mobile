import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthState } from '@/redux/slices/authSlice';
import { RouteState } from '@/redux/slices/routeSlice';

export const persistAuthConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
  whitelist: ['token', 'role', 'isAuthenticated', 'user'],
};

export const persistRouteConfig: PersistConfig<RouteState> = {
  key: 'route',
  storage,
  whitelist: ['currentRouteId'],
};
