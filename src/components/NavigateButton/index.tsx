import { useState } from 'react';

import { t } from 'i18next';

import { buttonStyles } from './styles';

import Button from '@/components/Button';
import NavigateButtonModal from '@/components/NavigateButtonModal';
import { driverLocation } from '@/constants/constants';

interface NavigateButtonProps {
  destination: { lat: number; lng: number } | string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  destination,
}: NavigateButtonProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleModal = (): void => setOpen((prev) => !prev);

  return (
    <>
      <Button
        label={t('routes.navigate')}
        variant='lined'
        color='primary'
        sx={buttonStyles}
        onClick={toggleModal}
      />
      <NavigateButtonModal
        open={open}
        handleClose={toggleModal}
        destination={destination}
        origin={driverLocation}
      />
    </>
  );
};

export default NavigateButton;
