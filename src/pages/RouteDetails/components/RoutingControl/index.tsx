import L from 'leaflet';
import { useEffect } from 'react';
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

  useEffect(() => {
    const control = L.Routing.control({
      waypoints: addresses.map((point) => L.latLng(point.lat, point.lng)),
      routeWhileDragging: true,
      show: false,
      createMarker: (i, waypoint) =>
        L.marker(waypoint.latLng).bindPopup(addresses[i].address),
    } as ExtendedRoutingControlOptions).addTo(map);

    return (): void => {
      map.removeControl(control);
    };
  }, [addresses, map]);

  return null;
};

export default RoutingControl;
