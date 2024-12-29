import { Dispatch, SetStateAction, useState } from 'react';

import ReactSignatureCanvas from 'react-signature-canvas';

interface UseCustomerConfirmHook {
  handleRemove: () => void;
  handleSignSave: () => void;
  setSign: Dispatch<SetStateAction<ReactSignatureCanvas | null | undefined>>;
}

export const useCustomerConfirm = (): UseCustomerConfirmHook => {
  const [sign, setSign] = useState<ReactSignatureCanvas | null>();

  const handleRemove = (): void => {
    sign?.clear();
  };

  const handleSignSave = (): void => {
    console.log(sign?.getTrimmedCanvas().toDataURL('image/png'));
  };

  return {
    handleRemove,
    handleSignSave,
    setSign,
  };
};
