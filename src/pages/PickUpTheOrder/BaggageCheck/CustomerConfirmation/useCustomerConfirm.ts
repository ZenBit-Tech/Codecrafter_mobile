import { ChangeEvent, useState } from 'react';

// eslint-disable-next-line import/no-duplicates
import ReactSignatureCanvas from 'react-signature-canvas';
// eslint-disable-next-line import/no-duplicates
import SignatureCanvas from 'react-signature-canvas';

interface UseCustomerConfirmHook {
  handleRemove: () => void;
  handleSignSave: () => void;
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

  const handleSignSave = (): void => {
    // TODO store sign request
    // console.log(sign?.getTrimmedCanvas().toDataURL('image/png'));
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
