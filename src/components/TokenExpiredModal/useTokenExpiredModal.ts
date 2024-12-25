import { useCallback } from 'react';

import axios from 'axios';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { sendVerificationCode } from '@/api/userActions';
import { logout } from '@/redux/slices/authSlice';
import { closeModal } from '@/redux/slices/tokenModalSlice';
import { RootState } from '@/redux/store';

interface UseTokenExpiredModalReturn {
  isModalOpen: boolean;
  handleResendCode: () => Promise<void>;
  handleCloseModal: () => void;
}

const useTokenExpiredModal = (): UseTokenExpiredModalReturn => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isModalOpen = useSelector(
    (state: RootState) => state.tokenModal.isModalOpen
  );
  const userEmail = useSelector((state: RootState) => state.auth.user?.email);

  const handleResendCode = useCallback(async (): Promise<void> => {
    if (!userEmail) {
      toast(t('auth.missingEmail'));

      return;
    }

    try {
      const success = await sendVerificationCode(userEmail)();

      if (success) {
        dispatch(closeModal());
        navigate('/verification', { state: { email: userEmail } });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }, [dispatch, navigate, userEmail]);

  const handleCloseModal = useCallback((): void => {
    dispatch(closeModal());
    dispatch(logout());
  }, [dispatch]);

  return {
    isModalOpen,
    handleResendCode,
    handleCloseModal,
  };
};

export default useTokenExpiredModal;
