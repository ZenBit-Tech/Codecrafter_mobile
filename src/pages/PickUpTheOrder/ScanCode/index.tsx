import { FC } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
// import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode';

// import Button from '@/components/Button';

import './styles.css';
import Header from '@/components/Header';
import InformBlock from './components/InformBlock';
import { ActionBtns } from './components/ActionBtns';

const ScanCode: FC = () => {
  //   const [isEnabled, setEnabled] = useState<boolean>(false);

  //   useEffect(() => {
  //     const config = {
  //       fps: 10,
  //       qrbox: { width: 400, height: 450 },
  //       formatsToSupport: [Html5QrcodeSupportedFormats.EAN_13],
  //     };

  //     const html5QRCode = new Html5Qrcode('qrCodeContainer');

  //     if (isEnabled) {
  //       html5QRCode.start(
  //         { facingMode: 'environment' },
  //         config,
  //         (decodedText) => {
  //           console.log(decodedText);
  //           setEnabled(false);

  //           const container = document.getElementById('qrCodeContainer');

  //           if (container) {
  //             container.classList.add('success');

  //             setTimeout(() => {
  //               container.classList.remove('success');
  //             }, 2000);
  //           }
  //         }
  //       );

  //       return (): void => {
  //         html5QRCode.stop().then(() => {
  //           console.log('Scanning stopped.');
  //         });
  //       };
  //     }
  //   }, [isEnabled]);

  return (
    <>
      <Header pageName='Locking the baggage' hasBackIcon />
      <InformBlock />
      <ActionBtns />
      {/* <div id='qrCodeContainer'>
        <Button
          onClick={() => setEnabled(true)}
          label='Start Scanning'
          variant='text'
        />
        <Button
          onClick={() => setEnabled(false)}
          label='Stop Scanning'
          variant='text'
        />
      </div> */}
    </>
  );
};

export default ScanCode;
