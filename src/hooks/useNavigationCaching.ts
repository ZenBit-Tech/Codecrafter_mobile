import { useEffect } from 'react';

export const useNavigationCaching = (): void => {
  useEffect(() => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      const urlsToWarmup = [
        '/app/map',
        '/app/notifications',
        '/app/orders',
        '/app/routes',
      ];

      navigator.serviceWorker.controller.postMessage({
        type: 'CACHE_WARMUP',
        urls: urlsToWarmup,
      });
    }
  }, []);
};
