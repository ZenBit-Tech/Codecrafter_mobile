import axios from 'axios';
import { toast } from 'react-toastify';

import { NOTIFICATION_SUCCESS_STATUS, tBase } from '@/constants/constants';
import axiosInstance from '@/utils/axiosInstance';
import i18n from '@/utils/i18n';

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
        toast.success(i18n.t(`${tBase}.notifications.success`));
      } else {
        toast.error(i18n.t(`${tBase}.notifications.error`));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t(`${tBase}.notifications.error`));
      } else {
        toast.error(i18n.t(`${tBase}.notifications.unknownError`));
      }
    }
  };
