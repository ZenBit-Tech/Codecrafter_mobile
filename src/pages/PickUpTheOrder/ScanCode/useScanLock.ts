import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';

import { CLOSE_SCAN_SUCCESS_DELAY } from '@/constants/numbers';

interface UseScanLockHook {
  isEnabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}

type UseEffectReturnType = () => void;

export const useScanLock = (): UseScanLockHook => {
  const [isEnabled, setEnabled] = useState<boolean>(false);

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
        (decodedText: string) => {
          console.log(decodedText);
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
