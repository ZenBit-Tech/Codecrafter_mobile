import { useEffect, useRef } from 'react';

import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

import { customIcon } from '@/components/CustomMapPin';

interface Address {
  lat: number;
  lng: number;
  address: string;
}

interface ExtendedRoutingControlOptions
  extends L.Routing.RoutingControlOptions {
  createMarker?: (
    i: number,
    waypoint: L.Routing.Waypoint,
    n: number
  ) => L.Marker;
}

const RoutingComponent = ({ addresses }: { addresses: Address[] }): null => {
  const map = useMap();
  const routingControlRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    routingControlRef.current = L.Routing.control({
      waypoints: addresses.map((point) => L.latLng(point.lat, point.lng)),
      routeWhileDragging: true,
      show: false,
      createMarker: (i, waypoint) =>
        L.marker(waypoint.latLng, {
          icon: customIcon,
        }).bindPopup(i === 0 ? 'Driver Location' : addresses[i].address),
    } as ExtendedRoutingControlOptions).addTo(map);

    return (): void => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [addresses, map]);

  return null;
};

export default RoutingComponent;
