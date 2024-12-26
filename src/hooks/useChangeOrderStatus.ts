import axios from 'axios';

import { OrderStatuses } from '@/constants/status';
import { useAppSelector } from '@/redux/hooks';

interface UseChangeOrderStatusHook {
  changeOrderStatus: (orderId: number, status: OrderStatuses) => Promise<void>;
}

export const useChangeOrderStatus = (): UseChangeOrderStatusHook => {
  const { token: accessToken } = useAppSelector((store) => store.auth);

  const changeOrderStatus = async (
    orderId: number,
    status: OrderStatuses
  ): Promise<void> => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/orders/${orderId}`,
        { status },
        {
          headers: {
            authorization: accessToken,
          },
        }
      );
    } catch (error) {
      throw new Error();
    }
  };

  return { changeOrderStatus };
};
