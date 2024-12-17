import { useEffect, useState } from 'react';

import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { useAppSelector } from '@/redux/hooks';

interface TransformedOrder {
  id: number;
  collection_date: Date;
  collection_time_start: Date;
  collection_time_end: Date;
  airport_name: string;
  flight_id: string;
  ticket_photo: string;
  full_name: string;
}

interface UseGetOrderHook {
  orderInform: TransformedOrder | null;
}

export const useGetOrder = (): UseGetOrderHook => {
  const [orderInform, setOrderInform] = useState<TransformedOrder | null>(null);
  const { token: accessToken } = useAppSelector((store) => store.auth);

  const getOrderInform = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/orders/boarding-pass/1`,
        { headers: { authorization: accessToken } }
      );

      setOrderInform(response.data);
    } catch (error) {
      toast.error(t('boardingPass.errors.cantFindOrder'));
    }
  };

  useEffect(() => {
    getOrderInform().catch();
  }, []);

  return { orderInform };
};
