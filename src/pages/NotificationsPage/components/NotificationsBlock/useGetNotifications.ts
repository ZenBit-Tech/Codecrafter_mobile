import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/redux/hooks';
import { setUnreadMessages } from '@/redux/slices/unreadNotificationsSlice';

export enum NotificationTypes {
  ROUTE = 'route',
  BELL = 'bell',
  LUGGAGE = 'luggage',
  MAP_PIN = 'map-pin',
  START_ROUTE = 'start-route',
  ORDER_FAILURE_REASON = 'order-failure-reason',
}

export interface TransformedNotification {
  id: number;
  type: NotificationTypes;
  linkText: string;
  linkHref: string;
  message: string;
  timeDifference: string;
}

export interface GetNotificationsResponse {
  today: TransformedNotification[];
  yesterday: TransformedNotification[];
  thisMonth: TransformedNotification[];
  thisYear: TransformedNotification[];
}

interface UseGetNotificationsHook {
  notifications: null | GetNotificationsResponse;
}

export const useGetNotifications = (): UseGetNotificationsHook => {
  const [notifications, setNotifications] =
    useState<null | GetNotificationsResponse>(null);
  const { token: accessToken, user } = useAppSelector((store) => store.auth);
  const dispatch = useDispatch();

  const readAllNotifications = useCallback(async (): Promise<void> => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/notifications/${user?.id}`,
        {},
        {
          headers: {
            authorization: accessToken,
          },
        }
      );

      dispatch(setUnreadMessages(null));
    } catch (error) {
      throw new Error('');
    }
  }, []);

  const getNotifications = useCallback(async (): Promise<void> => {
    try {
      // await readAllNotifications();
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/notifications/${user?.id}`,
        {
          headers: {
            authorization: accessToken,
          },
        }
      );

      setNotifications(data);
    } catch (error) {
      throw new Error('');
    }
  }, [accessToken, user?.id]);

  useEffect(() => {
    getNotifications().catch();
    readAllNotifications().catch();
    // dispatch(setUnreadMessages(null));
  }, [getNotifications, readAllNotifications]);

  return {
    notifications,
  };
};
