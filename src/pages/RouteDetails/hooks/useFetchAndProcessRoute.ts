import { useEffect, useMemo } from 'react';

import { useFetchRoute } from './useFetchRoute';
import { useProcessAddresses } from './useProcessAddresses';

import { useAppSelector } from '@/redux/hooks';
import { Address, RouteInform } from '@/types/route';

interface UseFetchAndProcessRouteResult {
  memoizedAddresses: Address[];
  isLoading: boolean;
  route: RouteInform | null;
}

export const useFetchAndProcessRoute = (): UseFetchAndProcessRouteResult => {
  const user = useAppSelector((state) => state.auth.user);
  const {
    validAddresses,
    isAddressesLoading,
    route,
    currentRouteId,
    driverAddress,
  } = useAppSelector((state) => state.route);

  const shouldFetch = !(validAddresses.length > 0 && !!driverAddress);

  const { fetchRoute, isRouteLoading } = useFetchRoute(
    user?.id,
    Number(currentRouteId)
  );
  const { processAddresses } = useProcessAddresses(route as RouteInform);

  useEffect(() => {
    if (shouldFetch && currentRouteId) {
      fetchRoute().catch((error) => {
        throw new Error(`Error fetching route: ${error}`);
      });
    }
  }, [fetchRoute, currentRouteId, shouldFetch]);

  useEffect(() => {
    if (shouldFetch && route) {
      processAddresses().catch((error) => {
        throw new Error(`Error processing addresses: ${error}`);
      });
    }
  }, [processAddresses, route, shouldFetch]);

  const memoizedAddresses = useMemo(
    () => (shouldFetch ? validAddresses : validAddresses),
    [validAddresses, shouldFetch]
  );

  const isLoading = shouldFetch && (isRouteLoading || isAddressesLoading);

  return { memoizedAddresses, isLoading, route };
};
