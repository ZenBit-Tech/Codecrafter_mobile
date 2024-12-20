import { useState } from 'react';

import { t } from 'i18next';

import { buttonStyles } from './styles';

import Button from '@/components/Button';
import NavigateButtonModal from '@/components/NavigateButtonModal';

const NavigateButton: React.FC = () => {
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
      <NavigateButtonModal open={open} handleClose={toggleModal} />
    </>
  );
};

export default NavigateButton;
