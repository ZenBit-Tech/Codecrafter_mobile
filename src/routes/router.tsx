import { t } from 'i18next';
import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import RestrictedRoute from './RestrictedRoute';

import ExamplePage from '@/pages/ExamplePage';
import FailedReasonPage from '@/pages/FailedReason';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFound';
import OrderPage from '@/pages/OrderPage';
import { BaggageCheckPage } from '@/pages/PickUpTheOrder/BaggageCheck/BaggageCheckPage';
import { CustomerConfirmationPage } from '@/pages/PickUpTheOrder/BaggageCheck/CustomerConfirmation';
import { ProhibitedItemsPage } from '@/pages/PickUpTheOrder/BaggageCheck/ProhibitedItemsPage';
import { BoardingPassVerificationPage } from '@/pages/PickUpTheOrder/BoardingPass/BoardingPassVerificationPage';
import { IdentityVerification } from '@/pages/PickUpTheOrder/BoardingPass/IdentityVerification';
import { PreArrivalPage } from '@/pages/PickUpTheOrder/BoardingPass/PreArrivalPage';
import RouteDetails from '@/pages/RouteDetails';
import RoutesPage from '@/pages/RoutesPage';
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
      { path: 'map', element: <RouteDetails /> },
      { path: 'notifications', element: <h1>{t('pageTitle')}</h1> },
      { path: 'routes', element: <RoutesPage /> },
      { path: 'map/failed', element: <FailedReasonPage /> },
      {
        path: 'orders',
        element: <OrderPage />,
      },
      { path: 'map', element: <h1>{t('greeting')}</h1> },
      { path: 'notifications', element: <h1>{t('pageTitle')}</h1> },
      {
        path: 'route',
        element: <RouteDetails />,
      },
      { path: 'pre-arrival', element: <PreArrivalPage /> },
      { path: 'identity-verification', element: <IdentityVerification /> },
      {
        path: 'boarding-pass-verification',
        element: <BoardingPassVerificationPage />,
      },
      {
        path: 'baggage-verification',
        element: <BaggageCheckPage />,
      },
      {
        path: 'prohibited-items',
        element: <ProhibitedItemsPage />,
      },
      {
        path: 'customer-confirmation',
        element: <CustomerConfirmationPage />,
      },
    ],
  },
  { path: '/example', element: <ExamplePage /> },
]);

export default router;
