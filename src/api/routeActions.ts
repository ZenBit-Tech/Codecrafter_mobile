import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { addDays, format } from 'date-fns';
import { toast } from 'react-toastify';

import { QUERY_DATE_FORMAT } from '@/constants/dateFormats';
import { RouteStatuses } from '@/constants/status';
import { NOT_FOUND } from '@/constants/statusCode';
import { setRoute, setRoutes } from '@/redux/slices/routeSlice';
import { Route } from '@/types/route';
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
        if (error.response?.status === NOT_FOUND) {
          toast.error(i18n.t('routes.routeNotFound'));
        } else {
          toast.error(i18n.t('routes.errorFetchingRoute'));
        }
      } else {
        toast.error(i18n.t('routes.unknownError'));
      }
    }
  };

export const updateRouteStatus =
  (routeId: number, driverId: number, status: RouteStatuses) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.patch(`route/driver/${routeId}`, {
        driverId,
        status,
      });
      const route = response.data;

      if (route) {
        dispatch(setRoute(route));
      } else {
        toast.error(i18n.t('routes.unknownError'));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('routes.errorUpdateStatusRoute'));
      } else {
        toast.error(i18n.t('routes.unknownError'));
      }
    }
  };

export const getDriverDateRoutes =
  (driverName: string, date: Date) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.get(
        `route/by-dates?startDate=${format(date, QUERY_DATE_FORMAT)}&endDate=${format(addDays(date, 1), QUERY_DATE_FORMAT)}&sortField=submission_date&sortDirection=asc&drivers=${driverName}`
      );
      const routes: Route[] = response.data;

      if (routes) {
        dispatch(setRoutes(routes));
      } else {
        toast.error(i18n.t('routes.unknownError'));
        dispatch(setRoutes(null));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('routes.noRoutesFound'));
        dispatch(setRoutes(null));
      } else {
        toast.error(i18n.t('routes.unknownError'));
        dispatch(setRoutes(null));
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
