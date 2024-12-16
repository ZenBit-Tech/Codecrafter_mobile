import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { setOrders } from '@/redux/slices/orderSlice';
import axiosInstance from '@/utils/axiosInstance';

export const getOrders =
  (driverId: number, orderDate: Date) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.get(
        `orders/by-driver?date=${orderDate}&driverId=${driverId}`
      );
      const orders = response.data;

      if (orders) {
        dispatch(setOrders(orders));
      } else {
        toast.error(t('orders.unknownError'));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('orders.failedLoad');
      } else {
        toast.error(t('orders.unknownError'));
      }
    }
  };
