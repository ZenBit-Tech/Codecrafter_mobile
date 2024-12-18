import React, { useState } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';
import { ToastContainer } from 'react-toastify';

import AddressList from './components/AddressList';
import AddressPlaceholder from './components/AddressPlaceholder';
import MapView from './components/MapView';
import StartTheRouteModal from './components/StartTheRouteModal';
import { useFetchAndProcessRoute } from './hooks/useFetchAndProcessRoute';
import { buttonStyles, containerStyles, spacerStyles } from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { Address } from '@/types/route';

const RouteDetails: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const { memoizedAddresses, driverAddresses, isLoading, route } =
    useFetchAndProcessRoute();

  const toggleModal = (): void => setOpen((prev) => !prev);
  const toggleMapExpand = (): void => setIsMapExpanded((prev) => !prev);

  if (isLoading) {
    return <Loader isLoading />;
  }

  if (!memoizedAddresses.length) {
    return <AddressPlaceholder />;
  }

  return (
    <>
      <Header pageName={`${t('routes.route')} #${route?.id || ''}`} />
      <Box sx={containerStyles}>
        {isMapExpanded ? (
          <MapView
            addresses={[driverAddresses as Address, ...memoizedAddresses]}
            isExpanded
            onDoubleClick={toggleMapExpand}
            onClose={toggleMapExpand}
          />
        ) : (
          <>
            <MapView
              addresses={[driverAddresses as Address, ...memoizedAddresses]}
              onDoubleClick={toggleMapExpand}
            />
            <AddressList addresses={memoizedAddresses} />
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
        <Box sx={spacerStyles} />
        <ToastContainer />
      </Box>
    </>
  );
};

export default RouteDetails;
