import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { SUCCESS_STATUS, tBase } from '@/constants/constants';
import { setOrders } from '@/redux/slices/orderSlice';
import axiosInstance from '@/utils/axiosInstance';

interface FailedReasonPayload {
  orderId: number;
  reason: string;
}

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

export const sendFailedReasonMessage =
  (payload: FailedReasonPayload) => async (): Promise<void> => {
    try {
      const response = await axiosInstance.post(
        '/orders/failed-reason',
        payload
      );

      if (response.status === SUCCESS_STATUS) {
        toast.success(t(`${tBase}.responses.success`));
      } else {
        toast.error(t(`${tBase}.responses.error`));
      }
    } catch (error) {
      toast.error(t(`${tBase}.responses.unknownError`));
    }
  };
