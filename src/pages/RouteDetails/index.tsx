import React, { useState } from 'react';

import { Box } from '@mui/material';
import { t } from 'i18next';
import { toast, ToastContainer } from 'react-toastify';

import AddressList from './components/AddressList';
import AddressPlaceholder from './components/AddressPlaceholder';
import MapView from './components/MapView';
import RouteActionButtons from './components/RouteActionButtons';
import { useFetchAndProcessRoute } from './hooks/useFetchAndProcessRoute';
import { containerStyles, spacerStyles } from './styles';

import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { useAppSelector } from '@/redux/hooks';
import { Address } from '@/types/route';

const RouteDetails: React.FC = () => {
  const [isMapExpanded, setIsMapExpanded] = useState<boolean>(false);
  const { isRouteLoading, currentRouteId, driverAddress } = useAppSelector(
    (state) => state.route
  );

  const { memoizedAddresses, isLoading, route } = useFetchAndProcessRoute();

  const toggleMapExpand = (): void => setIsMapExpanded((prev) => !prev);

  if (!currentRouteId) {
    toast.warn(t('routes.errorNotSelectedRoute'));
  }

  if (isLoading || isRouteLoading) {
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
            addresses={[driverAddress as Address, ...memoizedAddresses]}
            isExpanded
            onDoubleClick={toggleMapExpand}
            onClose={toggleMapExpand}
          />
        ) : (
          <>
            <MapView
              addresses={[driverAddress as Address, ...memoizedAddresses]}
              onDoubleClick={toggleMapExpand}
            />
            <AddressList addresses={memoizedAddresses} />
            <RouteActionButtons />
          </>
        )}
        <Box sx={spacerStyles} />
        <ToastContainer />
      </Box>
    </>
  );
};

export default RouteDetails;
