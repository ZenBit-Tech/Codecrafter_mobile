import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { setRoute } from '@/redux/slices/routeSlice';
import axiosInstance from '@/utils/axiosInstance';
import i18n from '@/utils/i18n';

export const getDriverRoute =
  (driverId: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.get(`route/driver/${driverId}`);
      const route = response.data;

      if (route) {
        dispatch(setRoute(route));
      } else {
        toast.error(i18n.t('routes.unknownError'));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('routes.errorFetchingRoute'));
      } else {
        toast.error(i18n.t('routes.unknownError'));
      }
    }
  };

export const geocodeAddress = async (
  address: string
): Promise<{ lat: number; lng: number } | null> => {
  try {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_OPEN_STREET_GEO_API}`,
      {
        params: {
          q: address,
          format: 'json',
        },
      }
    );

    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];

      return { lat: parseFloat(lat), lng: parseFloat(lon) };
    }

    return null;
  } catch (error) {
    toast.error(i18n.t('routes.errorFetchingAddresses'));

    return null;
  }
};
