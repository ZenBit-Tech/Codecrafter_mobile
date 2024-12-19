import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { NOTIFICATION_SUCCESS_STATUS, tBase } from '@/constants/constants';
import axiosInstance from '@/utils/axiosInstance';

interface NotificationPayload {
  type: string;
  link_text: string;
  link_href: string;
  message: string | null;
  userId: number | undefined;
}

export const createNotification =
  (payload: NotificationPayload) => async (): Promise<void> => {
    try {
      const response = await axiosInstance.post('/notifications', payload);

      if (response.status === NOTIFICATION_SUCCESS_STATUS) {
        toast.success(t(`${tBase}.notifications.success`));
      } else {
        toast.error(t(`${tBase}.notifications.error`));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(t(`${tBase}.notifications.error`));
      } else {
        toast.error(t(`${tBase}.notifications.unknownError`));
      }
    }
  };
