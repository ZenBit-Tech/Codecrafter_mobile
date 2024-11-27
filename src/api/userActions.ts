import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { setAccessToken } from '@/redux/slices/authSlice';
import axiosInstance from '@/utils/axiosInstance';
import i18n from '@/utils/i18n';

export const sendVerificationCode =
  (email: string) => async (): Promise<boolean> => {
    try {
      const response = await axiosInstance.get(`/auth/driver/${email}`);
      if (response.data.status) {
        toast.success(i18n.t('auth.loginLinkSuccess', { email }));
        return true;
      }
      toast.error(i18n.t('auth.loginCodeFailure'));
      return false;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('auth.userNotExistError'));
      } else {
        toast.error(i18n.t('auth.unknownError'));
      }
      return false;
    }
  };

export const verifyCode =
  (verificationCode: string, email: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.post('/auth/driver/otp-verify', {
        email,
        verificationCode,
      });

      const { token, role } = response.data;

      if (token) {
        dispatch(setAccessToken({ token, role }));
      } else {
        toast.error(i18n.t('auth.invalidExpiredVerificationCode'));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('auth.verificationError'));
      } else {
        toast.error(i18n.t('auth.unknownError'));
      }
    }
  };
