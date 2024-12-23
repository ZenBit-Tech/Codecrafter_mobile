import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { persistAuthConfig } from '@/redux/persistConfig';

export interface AuthState {
  token: string | null;
  role: string | null;
  isAuthenticated: boolean;
  user: {
    id: number;
    full_name: string;
    email: string;
    phone_number: string;
    companyId: number;
    createdAt: string;
    updatedAt: string;
  } | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<{
        token: string;
        role: string;
        user: AuthState['user'];
      }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setAccessToken, logout } = authSlice.actions;
export default persistReducer(persistAuthConfig, authSlice.reducer);
