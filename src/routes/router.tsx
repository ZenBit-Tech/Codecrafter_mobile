import { t } from 'i18next';
import { createBrowserRouter } from 'react-router-dom';

import ExamplePage from '@/pages/ExamplePage';
import MainPage from '@/pages/MainPage';
import OrderPage from '@/pages/OrderPage';
import SignInPage from '@/pages/SignIn';

const router = createBrowserRouter([
  { path: '/', element: <SignInPage /> },
  {
    path: '/app',
    element: <MainPage />,
    children: [
      { path: 'orders', element: <OrderPage /> },
      { path: 'map', element: <h1>{t('greeting')}</h1> },
      { path: 'notifications', element: <h1>{t('pageTitle')}</h1> },
      { path: 'route', element: <h1>{t('routes')}</h1> },
    ],
  },
  { path: '/example', element: <ExamplePage /> },
]);

export default router;
