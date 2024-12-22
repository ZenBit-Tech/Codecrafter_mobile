import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  deleteLuggageImage,
  getOrdersLuggages,
  uploadLuggageImage,
} from '@/api/baggageActions';
import { truncateString } from '@/utils/stringUtils';

interface PhotoItem {
  id: number;
  src: string;
  description: string;
  name: string;
}

interface UseBaggageRecordReturn {
  photoList: PhotoItem[];
  loading: boolean;
  handleImageUpload: (luggageId: number) => Promise<void>;
  handleImageDelete: (luggageId: number) => Promise<void>;
  handleNextPage: () => void;
  handleBack: () => void;
  truncateString: (str: string, maxLength: number) => string;
}

const backNumber = -1;

const useBaggageRecord = (): UseBaggageRecordReturn => {
  const [photoList, setPhotoList] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchLuggageData = async (): Promise<void> => {
    try {
      const orderId = 4;
      const luggages = await getOrdersLuggages(orderId);
      const formattedPhotos = luggages.map((luggage) => {
        const fullImagePath = luggage.imgs[0]?.link || '';
        const fileName = fullImagePath.split('\\').pop() || '';

        return {
          id: luggage.id,
          src: fullImagePath
            ? `${import.meta.env.VITE_BASE_URL}/${fullImagePath.replace(/\\/g, '/')}`
            : '',
          description: luggage.luggage_description,
          name: fileName,
        };
      });

      setPhotoList(formattedPhotos);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (luggageId: number): Promise<void> => {
    const input = document.createElement('input');

    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = async (): Promise<void> => {
      if (input.files && input.files[0]) {
        const formData = new FormData();

        formData.append('file', input.files[0]);
        formData.append('luggageId', luggageId.toString());
        try {
          await uploadLuggageImage(formData);
          await fetchLuggageData();
        } catch (error) {
          if (axios.isAxiosError(error)) {
            throw new Error(error.message);
          }
        }
      }
    };

    input.click();
  };

  const handleImageDelete = async (luggageId: number): Promise<void> => {
    const photo = photoList.find((item) => item.id === luggageId);

    if (!photo?.src) {
      return;
    }
    try {
      await deleteLuggageImage(luggageId);
      await fetchLuggageData();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  };

  const handleNextPage = (): void => {
    navigate('/app/map/covering');
  };

  const handleBack = (): void => {
    navigate(backNumber);
  };

  useEffect(() => {
    fetchLuggageData().catch((error) => {
      throw new Error(error);
    });
  }, []);

  return {
    photoList,
    loading,
    handleImageUpload,
    handleImageDelete,
    handleNextPage,
    handleBack,
    truncateString,
  };
};

export default useBaggageRecord;
