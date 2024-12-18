import { useCallback, useState } from 'react';

import { getDriverDateRoutes } from '@/api/routeActions';
import { useAppDispatch } from '@/redux/hooks';

interface UseFetchRoutesReturnType {
  fetchRoutes: () => Promise<void>;
  isRouteLoading: boolean;
}

export const useFetchRoutes = (
  date: Date,
  userName: string
): UseFetchRoutesReturnType => {
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const dispatch = useAppDispatch();

  const fetchRoutes = useCallback(async () => {
    if (!userName) return;

    setIsRouteLoading(true);
    try {
      await getDriverDateRoutes(userName, date)(dispatch);
      setIsRouteLoading(false);
    } catch (error) {
      setIsRouteLoading(false);
    }
  }, [dispatch, userName, date]);

  return { fetchRoutes, isRouteLoading };
};
