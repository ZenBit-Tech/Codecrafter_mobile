import { Box } from '@mui/material';
import { t } from 'i18next';
import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './styles.css';
import { ToastContainer } from 'react-toastify';

import AddressList from './components/AddressList';
import AddressPlaceholder from './components/AddressPlaceholder';
import FitBounds from './components/FitBounds';
import RoutingControl from './components/RoutingControl';
import { useFetchRoute } from './hooks/useFetchRoute';
import { useProcessAddresses } from './hooks/useProcessAddresses';
import {
  buttonStyles,
  containerStyles,
  mapContainerStyles,
  spacerStyles,
} from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { useAppSelector } from '@/redux/hooks';
import { RouteInform } from '@/types/route';

const RouteDetails: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const route = useAppSelector((state) => state.route.route);

  const { fetchRoute, isRouteLoading } = useFetchRoute(user?.id);

  const { processAddresses, addresses, isAddressesLoading } =
    useProcessAddresses(route as RouteInform);

  const memoizedAddresses = useMemo(() => addresses, [addresses]);

  useEffect(() => {
    fetchRoute().catch((error) => {
      throw new Error(error);
    });
  }, [fetchRoute]);

  useEffect(() => {
    processAddresses().catch((error) => {
      throw new Error(error);
    });
  }, [processAddresses]);

  if (isRouteLoading || isAddressesLoading) {
    return <Loader isLoading />;
  }

  if (!memoizedAddresses.length) {
    return <AddressPlaceholder />;
  }

  return (
    <>
      <Header
        pageName={`${t('routes.route')} #${route?.id || ''}`}
        username={t('profilePicture')}
      />
      <Box sx={containerStyles}>
        <Box sx={mapContainerStyles}>
          <MapContainer className='map-container'>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution={`&copy; <a href="${import.meta.env.VITE_OPEN_STREET_API}/copyright">OpenStreetMap</a> contributors`}
            />
            <FitBounds addresses={memoizedAddresses} />
            <RoutingControl addresses={memoizedAddresses} />
          </MapContainer>
        </Box>
        <AddressList addresses={memoizedAddresses} />
        <Button
          label={t('routes.start')}
          variant='colored'
          color='primary'
          sx={buttonStyles}
        />
        <Box sx={spacerStyles} />
        <ToastContainer />
      </Box>
    </>
  );
};

export default RouteDetails;
