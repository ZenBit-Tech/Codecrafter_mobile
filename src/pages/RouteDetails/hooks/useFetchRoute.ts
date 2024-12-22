import { useCallback, useState } from 'react';

import { t } from 'i18next';
import { toast } from 'react-toastify';

import { getDriverRoute } from '@/api/routeActions';
import { useAppDispatch } from '@/redux/hooks';

interface UseFetchRouteReturnType {
  fetchRoute: () => Promise<void>;
  isRouteLoading: boolean;
}

export const useFetchRoute = (
  userId: number | undefined
): UseFetchRouteReturnType => {
  const [isRouteLoading, setIsRouteLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchRoute = useCallback(async () => {
    if (!userId) return;

    setIsRouteLoading(true);
    try {
      await getDriverRoute(userId)(dispatch);
    } catch (error) {
      toast.error(t('routes.errorFetchingRoute'));
    } finally {
      setIsRouteLoading(false);
    }
  }, [dispatch, userId]);

  return { fetchRoute, isRouteLoading };
};
