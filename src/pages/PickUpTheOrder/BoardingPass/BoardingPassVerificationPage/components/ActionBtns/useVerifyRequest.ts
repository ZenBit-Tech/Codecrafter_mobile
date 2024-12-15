import axios from 'axios';
import { toast } from 'react-toastify';

import { usePassVerificationData } from '@/pages/PickUpTheOrder/BoardingPass/BoardingPassVerificationPage/index';
import { useAppSelector } from '@/redux/hooks';

interface UseVerifyInterface {
  verifyRequest: () => Promise<void>;
  isVerified: boolean;
  isOngoing: boolean;
  isVerifiedSuccessfully: boolean;
}

export const useVerifyRequest = (): UseVerifyInterface => {
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const { isVerified, isOngoing, isVerifiedSuccessfully, verifyPassDispatch } =
    usePassVerificationData();

  const verifyRequest = async (): Promise<void> => {
    try {
      verifyPassDispatch({
        type: 'SET_LOADING',
        payload: true,
      });

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customers/boarding-pass-verify/1?orderId=1`,
        { headers: { authorization: accessToken } }
      );

      verifyPassDispatch({
        type: 'SET_VERIFIED',
        payload: true,
      });
      verifyPassDispatch({
        type: 'SET_ACTIVE',
        payload: response.data,
      });
      verifyPassDispatch({
        type: 'SET_LOADING',
        payload: false,
      });

      if (response.data) {
        toast.success('Boarding pass Verified');
      } else {
        toast.error('Boarding pass is NOT Verified');
      }
    } catch (error) {
      throw new Error();
    }
  };

  return { verifyRequest, isVerified, isOngoing, isVerifiedSuccessfully };
};
