import { useEffect, useState } from 'react';

import axiosInstance from '@/utils/axiosInstance';

interface Route {
  id: number;
  status: string;
  distance: number;
  submission_date: string;
  arrival_date: string;
}

interface UseRoutesReturn {
  routes: Route[] | null;
  loading: boolean;
  error: string | null;
}

export const useRoutes = (): UseRoutesReturn => {
  const [routes, setRoutes] = useState<Route[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get<Route[]>('/routes')
      .then((response) => {
        setRoutes(response.data);
        setError(null);
      })
      .catch((err) => {
        if (err instanceof Error) {
          setError(err.message);
        }
        setRoutes(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { routes, loading, error };
};
