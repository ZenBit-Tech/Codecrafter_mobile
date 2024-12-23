import axios from 'axios';

import { logout } from '@/redux/slices/authSlice';
import { store } from '@/redux/store';
import { history } from '@/utils/history';
import { setCurrentRouteId } from '@/redux/slices/routeSlice';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:4000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.token;

    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const unauthorizedStatus = 401;

    if (error.response && error.response.status === unauthorizedStatus) {
      store.dispatch(setCurrentRouteId(null));
      store.dispatch(logout());
      history.push('/');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
