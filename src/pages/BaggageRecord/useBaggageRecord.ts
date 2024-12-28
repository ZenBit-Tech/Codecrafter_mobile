import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  deleteLuggageImage,
  getOrdersLuggages,
  uploadLuggageImage,
} from '@/api/baggageActions';
import { OrderStatuses } from '@/constants/status';
import { useChangeOrderStatus } from '@/hooks/useChangeOrderStatus';
import { useAppSelector } from '@/redux/hooks';
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
  handleImageDelete: (luggageId: number) => void;
  handleNextPage: () => void;
  handleBack: () => void;
  truncateString: (str: string, maxLength: number) => string;
  openDeleteModal: boolean;
  handleOpenDeleteModal: (photo: PhotoItem) => void;
  handleCloseDeleteModal: () => void;
  confirmDelete: () => void;
  isReadyForNextPage: boolean;
}

const backNumber = -1;

const useBaggageRecord = (): UseBaggageRecordReturn => {
  const [photoList, setPhotoList] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isReadyForNextPage, setIsReadyForNextPage] = useState<boolean>(false);
  const navigate = useNavigate();
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const { changeOrderStatus } = useChangeOrderStatus();

  const fetchLuggageData = async (): Promise<void> => {
    try {
      const luggages = await getOrdersLuggages(orderId || 0);
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

  const handleOpenDeleteModal = (photo: PhotoItem): void => {
    setSelectedPhoto(photo);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = (): void => {
    setOpenDeleteModal(false);
    setSelectedPhoto(null);
  };

  const handleImageDelete = (luggageId: number): void => {
    const photo = photoList.find((item) => item.id === luggageId);

    if (!photo?.src) {
      return;
    }

    if (photo) {
      handleOpenDeleteModal(photo);
    }
  };

  const confirmDelete = async (): Promise<void> => {
    if (selectedPhoto) {
      try {
        await deleteLuggageImage(selectedPhoto.id);
        await fetchLuggageData();
        handleCloseDeleteModal();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(error.message);
        }
      }
    }
  };

  const handleNextPage = (): void => {
    changeOrderStatus(orderId ? +orderId : 0, OrderStatuses.BAGGAGE_RECORDED);
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

  useEffect(() => {
    const allPhotosUploaded = photoList.every((photo) => photo.src !== '');

    setIsReadyForNextPage(allPhotosUploaded);
  }, [photoList]);

  return {
    photoList,
    loading,
    handleImageUpload,
    handleImageDelete,
    handleNextPage,
    handleBack,
    truncateString,
    openDeleteModal,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    confirmDelete,
    isReadyForNextPage,
  };
};

export default useBaggageRecord;
