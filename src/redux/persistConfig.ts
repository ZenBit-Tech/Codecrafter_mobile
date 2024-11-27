import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthState } from '@/redux/slices/authSlice';

const persistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
  whitelist: ['token', 'role', 'isAuthenticated'],
};

export default persistConfig;
