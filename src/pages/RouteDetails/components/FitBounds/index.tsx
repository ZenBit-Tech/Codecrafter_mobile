import { LatLngBounds, LatLngTuple } from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { Address } from '@/types/route';

interface FitBoundsProps {
  addresses: Address[];
}

const FitBounds: React.FC<FitBoundsProps> = ({ addresses }: FitBoundsProps) => {
  const map = useMap();

  useEffect(() => {
    const padding = 5;

    if (addresses.length) {
      const bounds = new LatLngBounds(
        addresses.map((address) => [address.lat, address.lng] as LatLngTuple)
      );

      map.fitBounds(bounds, { padding: [padding, padding] });
    }
  }, [addresses, map]);

  return null;
};

export default FitBounds;
