import { useEffect, useMemo } from 'react';

import { useFetchRoute } from './useFetchRoute';
import { useProcessAddresses } from './useProcessAddresses';

import { useAppSelector } from '@/redux/hooks';
import { Address, RouteInform } from '@/types/route';

interface UseFetchAndProcessRouteResult {
  memoizedAddresses: Address[];
  driverAddresses: Address | undefined;
  isLoading: boolean;
  route: RouteInform | null;
}

export const useFetchAndProcessRoute = (): UseFetchAndProcessRouteResult => {
  const user = useAppSelector((state) => state.auth.user);
  const route = useAppSelector((state) => state.route.route);

  const { fetchRoute, isRouteLoading } = useFetchRoute(user?.id);
  const { processAddresses, addresses, isAddressesLoading, driverAddresses } =
    useProcessAddresses(route as RouteInform);

  useEffect(() => {
    fetchRoute().catch((error) => {
      throw new Error(`Error fetching route: ${error}`);
    });
  }, [fetchRoute]);

  useEffect(() => {
    processAddresses().catch((error) => {
      throw new Error(`Error processing addresses: ${error}`);
    });
  }, [processAddresses]);

  const memoizedAddresses = useMemo(() => addresses, [addresses]);
  const isLoading = isRouteLoading || isAddressesLoading;

  return { memoizedAddresses, driverAddresses, isLoading, route };
};
