import React, { useState } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';

import { buttonStyles } from './styles';

import Button from '@/components/Button';
import NavigateButton from '@/components/NavigateButton';
import { RouteStatuses } from '@/constants/status';
import StartTheRouteModal from '@/pages/RouteDetails/components/StartTheRouteModal';
import { useAppSelector } from '@/redux/hooks';

const RouteActionButtons: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isRouteOnTime: boolean = useAppSelector(
    (state) => state.route.route?.status === RouteStatuses.ON_TIME
  );
  const { validAddresses } = useAppSelector((state) => state.route);

  const toggleModal = (): void => setOpen((prev) => !prev);

  return (
    <Box>
      {isRouteOnTime ? (
        <NavigateButton
          destination={{
            lat: validAddresses[0].lat,
            lng: validAddresses[0].lng,
          }}
        />
      ) : (
        <>
          <Button
            label={t('routes.start')}
            variant='colored'
            color='primary'
            sx={buttonStyles}
            onClick={toggleModal}
          />
          <StartTheRouteModal open={open} handleClose={toggleModal} />
        </>
      )}
    </Box>
  );
};

export default RouteActionButtons;
