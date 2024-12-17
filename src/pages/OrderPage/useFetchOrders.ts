import { useCallback, useState } from 'react';

import { t } from 'i18next';
import { toast } from 'react-toastify';

import { getOrders } from '@/api/orderActions';
import { useAppDispatch } from '@/redux/hooks';

interface UseFetchOrdersReturnType {
  fetchOrders: () => Promise<void>;
  isOrderLoading: boolean;
}

export const useFetchOrders = (
  date: Date,
  userId: number | undefined
): UseFetchOrdersReturnType => {
  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const dispatch = useAppDispatch();

  const fetchOrders = useCallback(async () => {
    if (!userId) return;

    setIsOrderLoading(true);
    try {
      await getOrders(userId, date)(dispatch);
    } catch (error) {
      toast.error(t('orders.faliedLoad'));
    } finally {
      setIsOrderLoading(false);
    }
  }, [dispatch, userId, date]);

  return { fetchOrders, isOrderLoading };
};
