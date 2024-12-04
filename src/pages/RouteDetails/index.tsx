import { Box } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './styles.css';
import AddressList from './components/AddressList';
import RoutingControl from './components/RoutingControl';
import {
  buttonStyles,
  containerStyles,
  mapContainerStyles,
  spacerStyles,
} from './styles';

import Button from '@/components/Button';
import Header from '@/components/Header';
import { StatusEnum } from '@/constants/status';

const addresses = [
  {
    id: 1,
    lat: 51.511,
    lng: 7.465,
    address: 'Dortmund, Darmstadt, Hessen, 24005',
    time: '12:55',
    status: StatusEnum.FAILED,
  },
  {
    id: 2,
    lat: 50.827,
    lng: 8.769,
    address: 'Darmstadt, Hessen, 24005',
    time: '14:30',
    status: StatusEnum.COMPLETED,
  },
  {
    id: 3,
    lat: 50.108,
    lng: 8.682,
    address: 'Frankfurt, Hessen, 60311',
    time: '15:45',
    status: StatusEnum.AT_RISK,
  },
  {
    id: 4,
    lat: 50.108,
    lng: 8.682,
    address: 'Frankfurt, Hessen, 60311',
    time: '15:45',
    status: StatusEnum.UPCOMING,
  },
];

const RouteDetails: React.FC = () => (
  <>
    <Header
      pageName={`${t('routes.route')} #0125`}
      username={t('profilePicture')}
    />
    <Box sx={containerStyles}>
      <Box sx={mapContainerStyles}>
        <MapContainer
          center={[addresses[0].lat, addresses[0].lng]}
          zoom={6}
          className='map-container'
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution={`&copy; <a href="${import.meta.env.VITE_OPEN_STREET_API}/copyright">OpenStreetMap</a> contributors`}
          />
          <RoutingControl addresses={addresses} />
        </MapContainer>
      </Box>
      <AddressList addresses={addresses} />
      <Button
        label={t('routes.start')}
        variant='colored'
        color='primary'
        sx={buttonStyles}
      />
      <Box sx={spacerStyles} />
    </Box>
  </>
);

export default RouteDetails;
