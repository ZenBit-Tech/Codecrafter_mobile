import { format } from 'date-fns';
import { t } from 'i18next';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { geocodeAddress } from '@/api/routeActions';
import { calculateDistance } from '@/pages/RouteDetails/utils/calculateDistance';
import { Address, RouteInform } from '@/types/route';

export const useProcessAddresses = (
  route: RouteInform
): {
  processAddresses: () => Promise<void>;
  addresses: Address[];
  isAddressesLoading: boolean;
} => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddressesLoading, setIsAddressesLoading] = useState(false);

  const processAddresses = useCallback(async () => {
    if (!route) return;

    setIsAddressesLoading(true);
    try {
      const driverLocation = await geocodeAddress('New York');

      const geocodedAddresses = await Promise.all(
        route.orders.map(async (order) => {
          const coordinates = await geocodeAddress(order.collection_address);

          if (!coordinates) return null;

          const formattedTime = `${format(
            new Date(order.collection_time_start),
            'HH:mm'
          )} - ${format(new Date(order.collection_time_end), 'HH:mm')}`;

          return {
            id: order.id,
            lat: coordinates.lat || 0,
            lng: coordinates.lng || 0,
            address: order.collection_address,
            time: formattedTime,
            status: order.status,
            distance: calculateDistance(
              driverLocation?.lat || 0,
              driverLocation?.lng || 0,
              coordinates.lat || 0,
              coordinates.lng || 0
            ),
          };
        })
      );

      const validAddresses = geocodedAddresses
        .filter(
          (address): address is Address & { distance: number } => !!address
        )
        .sort((a, b) => a.distance - b.distance);

      setAddresses(validAddresses);
    } catch (error) {
      toast.error(t('routes.errorFetchingAddresses'));
    } finally {
      setIsAddressesLoading(false);
    }
  }, [route]);

  return { processAddresses, addresses, isAddressesLoading };
};
