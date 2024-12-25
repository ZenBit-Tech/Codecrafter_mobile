import { useCallback, useEffect } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/redux/hooks';
import { setUnreadMessages } from '@/redux/slices/unreadNotificationsSlice';

interface UseGetUnreadNotificationsHook {
  unreadNotifications: number | null;
}

export const useGetUnreadNotifications = (): UseGetUnreadNotificationsHook => {
  const { count: unreadNotifications } = useAppSelector(
    (store) => store.unreadNotifications
  );
  const { token: accessToken, user } = useAppSelector((store) => store.auth);
  const dispatch = useDispatch();

  const getUnreadNotifications = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/notifications/unread-count/${user?.id}`,
        {
          headers: {
            authorization: accessToken,
          },
        }
      );

      dispatch(setUnreadMessages(data.count === 0 ? null : data.count));
    } catch (error) {
      throw new Error('');
    }
  }, [accessToken, dispatch, user?.id]);

  useEffect(() => {
    getUnreadNotifications().catch();
  }, [getUnreadNotifications]);

  return { unreadNotifications };
};
