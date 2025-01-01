import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { OrderStatuses } from '@/constants/status';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCustomerId } from '@/redux/slices/currentCustomerIdSlice';

interface TransformedLuggage {
  luggageType: 'big' | 'small' | 'middle';
  luggageWeight: number;
}

export interface OrderDetailsInterface {
  collectionDate: Date;
  status: OrderStatuses;
  collectionTimeStart: Date;
  collectionTimeEnd: Date;
  collectionAddress: string;
  airportName: string;
  flightId: string;
  customerId: number;
  customerFullName: string;
  customerPhoneNumber: string;
  dispatcherFullName: string;
  dispatcherPhoneNumber: string;
  luggages: TransformedLuggage[];
}

interface UseGetOrderDetailsHook {
  orderDetails: OrderDetailsInterface | null;
}

export const useGetOrderDetails = (): UseGetOrderDetailsHook => {
  const [orderDetails, setOrderDetails] =
    useState<OrderDetailsInterface | null>(null);
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const { id } = useParams();
  const dispatch = useAppDispatch();

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
      dispatch(setCustomerId(data.customerId));
    } catch (error) {
      throw new Error();
    }
  }, [accessToken, dispatch, id]);

  useEffect(() => {
    getOrderDetails().catch();
  }, [getOrderDetails]);

  return { orderDetails };
};
