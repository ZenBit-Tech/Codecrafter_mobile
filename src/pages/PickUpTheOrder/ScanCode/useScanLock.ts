import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';

import { CLOSE_SCAN_SUCCESS_DELAY } from '@/constants/numbers';
import { useAppSelector } from '@/redux/hooks';
import axiosInstance from '@/utils/axiosInstance';

interface UseScanLockHook {
  isEnabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

type UseEffectReturnType = () => void;

export const useScanLock = (): UseScanLockHook => {
  const [isEnabled, setEnabled] = useState<boolean>(false);
  const { value: orderId } = useAppSelector((store) => store.choseOrder);
  const { token: accessToken } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();

  const updateIsOrderLockedData = async (lockNumber: string): Promise<void> => {
    try {
      await axiosInstance.patch(
        `/orders/locking-baggage/${orderId}`,
        { lockNumber },
        {
          headers: {
            authorization: accessToken,
          },
        }
      );
    } catch (error) {
      throw new Error();
    }
  };

  useEffect((): UseEffectReturnType | undefined => {
    const config = {
      fps: 10,
      qrbox: { width: 400, height: 150 },
      formatsToSupport: [Html5QrcodeSupportedFormats.EAN_13],
    };

    const html5QRCode = new Html5Qrcode('qrCodeContainer');

    if (isEnabled) {
      html5QRCode.start(
        { facingMode: 'environment' },
        config,
        async (decodedText: string) => {
          try {
            await updateIsOrderLockedData(decodedText).then(() =>
              navigate('/app/map/lock-scaned')
            );
          } catch (error) {
            throw new Error();
          }

          setEnabled(false);

          const container = document.getElementById('qrCodeContainer');

          if (container) {
            container.classList.add('success');

            setTimeout(() => {
              container.classList.remove('success');
            }, CLOSE_SCAN_SUCCESS_DELAY);
          }
        },
        () => {}
      );

      return () => {
        html5QRCode.stop();
      };
    }

    return undefined;
  }, [isEnabled]);

  return { isEnabled, setEnabled };
};
