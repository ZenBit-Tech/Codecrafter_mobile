import L from 'leaflet';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

import markerIconUrl from '@/assets/icons/map-pin.png';

export const customIcon = L.icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  // eslint-disable-next-line no-magic-numbers
  iconSize: [25, 41],
  // eslint-disable-next-line no-magic-numbers
  iconAnchor: [12, 41],
  // eslint-disable-next-line no-magic-numbers
  popupAnchor: [0, -41],
});
