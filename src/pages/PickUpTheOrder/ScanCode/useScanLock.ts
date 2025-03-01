import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Quagga from 'quagga';
import { useNavigate } from 'react-router-dom';

import { CLOSE_SCAN_SUCCESS_DELAY } from '@/constants/numbers';
import { useAppSelector } from '@/redux/hooks';
import axiosInstance from '@/utils/axiosInstance';

interface UseScanLockHook {
  isEnabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

export const useScanLock = (): UseScanLockHook => {
  const [isEnabled, setEnabled] = useState<boolean>(false);
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const navigate = useNavigate();

  const updateIsOrderLockedData = async (lockNumber: string): Promise<void> => {
    try {
      await axiosInstance.patch(`/orders/locking-baggage/${orderId}`, {
        lockNumber,
      });
    } catch (error) {
      console.error('Error updating lock data:', error);
    }
  };

  useEffect(() => {
    if (!isEnabled) return;

    const container = document.getElementById('qrCodeContainer');

    if (!container) {
      console.error('QR code container not found');

      return;
    }

    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          target: container,
          constraints: { facingMode: 'environment' },
        },
        decoder: { readers: ['ean_reader'] },
        locate: true,
      },
      (err: unknown) => {
        if (err) {
          console.error('Quagga initialization failed:', err);

          return;
        }
        Quagga.start();
      }
    );

    const onDetected = async (result: {
      codeResult: { code: string };
    }): Promise<void> => {
      const decodedText = result.codeResult.code;

      try {
        await updateIsOrderLockedData(decodedText);
        navigate('/app/map/lock-scaned');
      } catch (error) {
        console.error('Error processing scanned code:', error);
      }

      setEnabled(false);
      container.classList.add('success');
      setTimeout(
        () => container.classList.remove('success'),
        CLOSE_SCAN_SUCCESS_DELAY
      );
    };

    Quagga.onDetected(onDetected);

    // eslint-disable-next-line consistent-return, @typescript-eslint/explicit-function-return-type
    return () => {
      Quagga.stop();
      Quagga.offDetected(onDetected);
    };
  }, [isEnabled, navigate, updateIsOrderLockedData]);

  return { isEnabled, setEnabled };
};
