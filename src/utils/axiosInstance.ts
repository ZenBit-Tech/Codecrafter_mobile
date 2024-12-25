import axios from 'axios';

import { openModal } from '@/redux/slices/tokenModalSlice';
import { store } from '@/redux/store';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:4000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.token;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
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
      store.dispatch(openModal());
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
