import axios from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import axiosInstance from '@/utils/axiosInstance';

interface LuggageImgs {
  link: string;
}

interface LuggageItem {
  id: number;
  luggage_description: string;
  imgs: LuggageImgs[];
}

export const getOrdersLuggages = async (
  orderId: number
): Promise<LuggageItem[]> => {
  try {
    const response = await axiosInstance.get(
      `/luggage-images/luggage/get-by-order/${orderId}`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};

export const uploadLuggageImage = async (
  formData: FormData
): Promise<string> => {
  try {
    const response = await axiosInstance.post(
      '/luggage-images/upload',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    toast.success(t('Image successfully uploaded'));

    return response.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(t(`${error.response?.data.message}`));
    }
    throw new Error('An unexpected error occurred during the upload process.');
  }
};

export const deleteLuggageImage = async (luggageId: number): Promise<void> => {
  try {
    const response = await axiosInstance.delete(`/luggage-images/${luggageId}`);

    toast.success(t('Image successfully deleted'));

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(t(`${error.response?.data.message}`));
    }
    throw new Error(
      'An unexpected error occurred during the deletion process.'
    );
  }
};
