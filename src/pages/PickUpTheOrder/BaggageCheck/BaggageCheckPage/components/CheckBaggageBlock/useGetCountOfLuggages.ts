import { useEffect, useState } from 'react';

import axios from 'axios';

import { useAppSelector } from '@/redux/hooks';

interface UseGetCountOfLuggagesHook {
  countOfLuggages: number | null;
}

export const useGetCountOfLuggages = (): UseGetCountOfLuggagesHook => {
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const [countOfLuggages, setCountOfLuggages] = useState<number | null>(null);

  const getCountOfLuggages = async (): Promise<void> => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/luggages/count-in-order?orderId=4`,
        { headers: { authorization: accessToken } }
      );

      setCountOfLuggages(data.countOfLuggages);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    getCountOfLuggages().catch();
  }, []);

  return { countOfLuggages };
};
