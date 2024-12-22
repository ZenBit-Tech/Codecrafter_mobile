import { useEffect, useRef } from 'react';

import L from 'leaflet';
import { useMap } from 'react-leaflet';

import 'leaflet-routing-machine';

import 'leaflet/dist/leaflet.css';
import { Address } from '@/types/route';

interface ExtendedRoutingControlOptions
  extends L.Routing.RoutingControlOptions {
  createMarker?: (i: number, waypoint: L.Routing.Waypoint) => L.Marker;
}

interface RouteControlProps {
  addresses: Address[];
}

const RoutingControl: React.FC<RouteControlProps> = ({
  addresses,
}: RouteControlProps) => {
  const map = useMap();
  const routingControlRef = useRef<L.Routing.Control>();

  useEffect(() => {
    routingControlRef.current = L.Routing.control({
      waypoints: addresses.map((point) => L.latLng(point.lat, point.lng)),
      routeWhileDragging: true,
      show: false,
      createMarker: (i, waypoint) =>
        L.marker(waypoint.latLng).bindPopup(
          i === 0 ? 'Driver Location' : addresses[i].address
        ),
    } as ExtendedRoutingControlOptions).addTo(map);

    return (): void => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [addresses, map]);

  return null;
};

export default RoutingControl;
