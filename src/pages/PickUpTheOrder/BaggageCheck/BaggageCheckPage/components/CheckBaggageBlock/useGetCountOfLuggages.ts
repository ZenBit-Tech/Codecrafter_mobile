import { useEffect, useState } from 'react';

import axios from 'axios';

import { useAppSelector } from '@/redux/hooks';

interface Luggage {
  id: number;
  luggage_type: string;
  luggage_weight: number;
  luggage_description: string;
}

interface UseGetCountOfLuggagesHook {
  luggages: Luggage[];
}

export const useGetCountOfLuggages = (): UseGetCountOfLuggagesHook => {
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const { value: orderid } = useAppSelector((store) => store.choseOrder);
  const [luggages, setLuggages] = useState<Luggage[]>([]);

  const getCountOfLuggages = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/luggages/for-weight-calculation?orderId=${orderid}`,
        { headers: { authorization: accessToken } }
      );

      setLuggages(data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    getCountOfLuggages().catch();
  }, []);

  return { luggages };
};
