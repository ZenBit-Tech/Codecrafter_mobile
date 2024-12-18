import React from 'react';

import { Box, IconButton } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

import {
  closeIconButtonStyles,
  closeIconStyles,
  mapContainerStyles,
  mapExpandedContainerStyles,
  mapExpandedWrapperStyles,
} from './styles';
import '@/pages/RouteDetails/styles.css';

import { COLORS } from '@/constants/colors';
import RoutingControl from '@/pages/RouteDetails/components/RoutingControl';
import { Address } from '@/types/route';

interface MapViewProps {
  addresses: Address[];
  isExpanded?: boolean;
  onDoubleClick: () => void;
  onClose?: () => void;
}

const ExpandableMap: React.FC<{ onDoubleClick: () => void }> = ({
  onDoubleClick,
}) => {
  useMapEvents({
    dblclick: () => onDoubleClick(),
  });

  return null;
};

const MapView: React.FC<MapViewProps> = ({
  addresses,
  isExpanded = false,
  onDoubleClick,
  onClose,
}) => {
  return isExpanded ? (
    <Box sx={mapExpandedWrapperStyles}>
      <Box sx={mapExpandedContainerStyles}>
        <IconButton onClick={onClose} sx={closeIconButtonStyles} size='large'>
          <Box sx={closeIconStyles}>
            <IoCloseOutline color={COLORS.black} />
          </Box>
        </IconButton>
        <MapContainer className='map-container' doubleClickZoom={false}>
          <ExpandableMap onDoubleClick={onDoubleClick} />
          <TileLayer
            url={import.meta.env.VITE_OPEN_STREET_TILE_API}
            attribution={`&copy; <a href="${import.meta.env.VITE_OPEN_STREET_API}/copyright">OpenStreetMap</a> contributors`}
          />
          <RoutingControl addresses={addresses} />
        </MapContainer>
      </Box>
    </Box>
  ) : (
    <Box sx={mapContainerStyles}>
      <MapContainer className='map-container' doubleClickZoom={false}>
        <ExpandableMap onDoubleClick={onDoubleClick} />
        <TileLayer
          url={import.meta.env.VITE_OPEN_STREET_TILE_API}
          attribution={`&copy; <a href="${import.meta.env.VITE_OPEN_STREET_API}/copyright">OpenStreetMap</a> contributors`}
        />
        <RoutingControl addresses={addresses} />
      </MapContainer>
    </Box>
  );
};

export default MapView;
