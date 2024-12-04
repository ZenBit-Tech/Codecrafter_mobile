import { t } from 'i18next';
import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import RestrictedRoute from './RestrictedRoute';

import ExamplePage from '@/pages/ExamplePage';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFound';
import OrderPage from '@/pages/OrderPage';
import RouteDetails from '@/pages/RouteDetails';
import SignInPage from '@/pages/SignIn';
import VerificationPage from '@/pages/VerificationPage';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/',
    element: (
      <RestrictedRoute>
        <SignInPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/verification',
    element: (
      <RestrictedRoute>
        <VerificationPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <MainPage />
      </ProtectedRoute>
    ),
    children: [
      { path: 'orders', element: <OrderPage /> },
      { path: 'map', element: <h1>{t('greeting')}</h1> },
      { path: 'notifications', element: <h1>{t('pageTitle')}</h1> },
      { path: 'route', element: <RouteDetails /> },
    ],
  },
  { path: '/example', element: <ExamplePage /> },
]);

export default router;
