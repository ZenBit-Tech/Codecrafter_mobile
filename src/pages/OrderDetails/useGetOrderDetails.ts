import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';

interface OrderDetailsInterface {
  collection_date: Date;
  collection_time_start: Date;
  collection_time_end: Date;
  collection_address: string;
  status: string;
  airport_name: string;
  flight_id: string;
  dispatcher: {
    full_name: string;
    phone: string;
  };
  customer: {
    id: number;
    full_name: string;
  };
}

interface UseGetOrderDetailsHook {
  orderDetails: OrderDetailsInterface | null;
}

export const useGetOrderDetails = (): UseGetOrderDetailsHook => {
  const [orderDetails, setOrderDetails] =
    useState<OrderDetailsInterface | null>(null);
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const { id } = useParams();

  const getOrderDetails = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/orders/${id}`,
        {
          headers: {
            authorization: accessToken,
          },
        }
      );

      setOrderDetails(data);
    } catch (error) {
      throw new Error();
    }
  }, [accessToken, id]);

  useEffect(() => {
    getOrderDetails().catch();
  }, [getOrderDetails]);

  return { orderDetails };
};
