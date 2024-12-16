import { useCallback, useState } from 'react';

import { format } from 'date-fns';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { geocodeAddress } from '@/api/routeActions';
import { OrderStatuses } from '@/constants/status';
import { Address, RouteInform } from '@/types/route';

export const useProcessAddresses = (
  route: RouteInform
): {
  processAddresses: () => Promise<void>;
  addresses: Address[];
  isAddressesLoading: boolean;
  driverAddresses: Address | undefined;
} => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [driverAddresses, setDriverAddresses] = useState<Address>();
  const [isAddressesLoading, setIsAddressesLoading] = useState(false);

  const processAddresses = useCallback(async () => {
    if (!route) return;

    const driverLocation = 'New York';

    setIsAddressesLoading(true);
    try {
      const driverLocationData = await geocodeAddress(driverLocation);

      if (!driverLocationData)
        throw new Error(t('routes.driver.locationError'));

      const driverAddress: Address = {
        id: 0,
        lat: driverLocationData.lat,
        lng: driverLocationData.lng,
        address: driverLocation,
        time: '',
        status: OrderStatuses.COMPLETED,
      };

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
            collectionTimeStart: new Date(order.collection_time_start),
          };
        })
      );

      const validAddresses = geocodedAddresses
        .filter(
          (
            address
          ): address is Address & {
            collectionTimeStart: Date;
          } => !!address
        )
        .sort(
          (a, b) =>
            a.collectionTimeStart.getHours() - b.collectionTimeStart.getHours()
        );

      setAddresses(validAddresses);
      setDriverAddresses(driverAddress);
    } catch (error) {
      toast.error(t('routes.errorFetchingAddresses'));
    } finally {
      setIsAddressesLoading(false);
    }
  }, [route]);

  return { processAddresses, addresses, isAddressesLoading, driverAddresses };
};
