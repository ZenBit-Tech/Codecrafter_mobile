import { useCallback } from 'react';

import { format } from 'date-fns';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { geocodeAddress } from '@/api/routeActions';
import { driverLocation } from '@/constants/constants';
import { FULL_TIME } from '@/constants/dateFormats';
import { OrderStatuses } from '@/constants/status';
import { useAppDispatch } from '@/redux/hooks';
import {
  setDriverAddress,
  setIsAddressesLoading,
  setValidAddresses,
} from '@/redux/slices/routeSlice';
import { Address, RouteInform } from '@/types/route';

export const useProcessAddresses = (
  route: RouteInform
): {
  processAddresses: () => Promise<void>;
} => {
  const dispatch = useAppDispatch();

  const processAddresses = useCallback(async () => {
    if (!route) return;

    dispatch(setIsAddressesLoading(true));
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
            FULL_TIME
          )} - ${format(new Date(order.collection_time_end), FULL_TIME)}`;

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

      const validAddresses = geocodedAddresses.filter(
        (
          address
        ): address is Address & {
          collectionTimeStart: Date;
        } => !!address
      );

      dispatch(setValidAddresses(validAddresses));
      dispatch(setDriverAddress(driverAddress));
    } catch (error) {
      toast.error(t('routes.errorFetchingAddresses'));
    } finally {
      dispatch(setIsAddressesLoading(false));
    }
  }, [dispatch, route]);

  return { processAddresses };
};
