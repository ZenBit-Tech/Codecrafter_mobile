/* eslint-disable no-underscore-dangle */
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute, Route } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

const HTTP_OK = 200;
const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const SECONDS_IN_A_MINUTE = 60;
const ONE_DAY_IN_SECONDS =
  HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR * SECONDS_IN_A_MINUTE;

const imageRoute = new Route(
  ({ request, sameOrigin }) => sameOrigin && request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, HTTP_OK],
      }),
    ],
  })
);

registerRoute(imageRoute);

const navigationRoute = new NavigationRoute(
  new NetworkFirst({
    cacheName: 'navigation',
    networkTimeoutSeconds: 3,
  })
);

registerRoute(navigationRoute);

self.addEventListener('message', async (event) => {
  if (event.data?.type === 'CACHE_WARMUP') {
    const urlsToCache = event.data.urls;

    if (Array.isArray(urlsToCache)) {
      try {
        const cache = await caches.open('navigation');

        await Promise.all(
          urlsToCache.map(async (url) => {
            const response = await fetch(url);

            if (response.ok) {
              cache.put(url, response);
            }
          })
        );
      } catch (error) {
        throw new Error(`Failed to open cache or fetch URLs: ${error}`);
      }
    }
  }
});

const ordersRoute = new Route(
  ({ url }) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const regex = new RegExp(`^${baseUrl}/orders/\\d+$`);

    return regex.test(url.href);
  },
  new NetworkFirst({
    cacheName: 'api/orders',
    networkTimeoutSeconds: 3,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: ONE_DAY_IN_SECONDS,
      }),
      {
        cacheWillUpdate: async ({ response }): Promise<Response | null> => {
          return response && response.status === HTTP_OK ? response : null;
        },
      },
    ],
  })
);

registerRoute(ordersRoute);
