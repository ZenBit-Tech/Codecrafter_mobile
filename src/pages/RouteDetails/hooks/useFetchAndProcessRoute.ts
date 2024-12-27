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
  const { validAddresses, isAddressesLoading, route, currentRouteId } =
    useAppSelector((state) => state.route);

  const { fetchRoute, isRouteLoading } = useFetchRoute(
    user?.id,
    Number(currentRouteId)
  );
  const { processAddresses } = useProcessAddresses(route as RouteInform);

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

  const memoizedAddresses = useMemo(() => validAddresses, [validAddresses]);
  const isLoading = isRouteLoading || isAddressesLoading;

  return { memoizedAddresses, isLoading, route };
};
