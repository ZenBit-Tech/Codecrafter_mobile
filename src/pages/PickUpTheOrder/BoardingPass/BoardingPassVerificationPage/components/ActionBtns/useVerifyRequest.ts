import axios from 'axios';

import { useAppSelector } from '@/redux/hooks';

interface UseVerifyInterface {
  verifyRequest: () => Promise<boolean>;
}

export const useVerifyRequest = (): UseVerifyInterface => {
  const { token: accessToken } = useAppSelector((store) => store.auth);

  const verifyRequest = async (): Promise<boolean> => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customers/boarding-pass-verify/1?orderId=1`,
        { headers: { authorization: accessToken } }
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      throw new Error();
    }
  };

  return { verifyRequest };
};
