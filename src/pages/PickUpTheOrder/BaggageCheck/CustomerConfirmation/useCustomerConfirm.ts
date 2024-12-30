import { ChangeEvent, useState } from 'react';

// eslint-disable-next-line import/no-duplicates
import ReactSignatureCanvas from 'react-signature-canvas';
// eslint-disable-next-line import/no-duplicates
import SignatureCanvas from 'react-signature-canvas';

import { useAppSelector } from '@/redux/hooks';
import axiosInstance from '@/utils/axiosInstance';

interface UseCustomerConfirmHook {
  handleRemove: () => void;
  handleSignSave: () => Promise<void>;
  handleChangeCustomerFullName: (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isVisible: boolean;
  handleCreateSign: (data: SignatureCanvas | null) => void;
  handleSignatureChange: () => void;
}

export const useCustomerConfirm = (): UseCustomerConfirmHook => {
  const [sign, setSign] = useState<ReactSignatureCanvas | null | undefined>(
    null
  );
  const [customerFullName, setCustomerFullName] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSign, setIsSign] = useState<boolean>(false);
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const { id: customerId } = useAppSelector((store) => store.currentCustomerId);

  const updateIsVisible = (): void => {
    setIsVisible(isSign && !!customerFullName);
  };

  const handleRemove = (): void => {
    sign?.clear();
    setIsSign(false);
    setIsVisible(false);
  };

  const handleSignatureChange = (): void => {
    setIsVisible(!!customerFullName);
    setIsSign(true);
  };

  const base64ToBlob = (base64: string, mimeType: string): Blob => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1) {
      byteArrays.push(byteCharacters.charCodeAt(offset));
    }

    const byteArray = new Uint8Array(byteArrays);

    return new Blob([byteArray], { type: mimeType });
  };

  const handleSignSave = async (): Promise<void> => {
    try {
      const formData = new FormData();

      if (sign) {
        const trimmedDataURL = sign.getTrimmedCanvas().toDataURL('image/png');

        if (trimmedDataURL) {
          const base64Data = trimmedDataURL.split(',')[1];

          const blob = base64ToBlob(base64Data, 'image/png');

          formData.append('file', blob, 'signature.png');
          formData.append('customerId', `${customerId}`);
        }
      }

      await axiosInstance.post('/customers/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: accessToken,
        },
      });
    } catch (error) {
      throw new Error(`Error uploading signature: ${error}`);
    }
  };

  const handleChangeCustomerFullName = (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setCustomerFullName(input.target.value);
    updateIsVisible();
  };

  const handleCreateSign = (data: SignatureCanvas | null): void => {
    setSign(data);
    updateIsVisible();
  };

  return {
    handleRemove,
    handleSignSave,
    handleChangeCustomerFullName,
    isVisible,
    handleCreateSign,
    handleSignatureChange,
  };
};
