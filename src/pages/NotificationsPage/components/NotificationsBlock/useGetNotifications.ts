import { useEffect, useState } from 'react';

import axios from 'axios';

import { useAppSelector } from '@/redux/hooks';

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

  const getNotifications = async (): Promise<void> => {
    try {
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
  };

  useEffect(() => {
    getNotifications().catch();
  }, []);

  return {
    notifications,
  };
};
