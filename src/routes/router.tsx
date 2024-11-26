import { createBrowserRouter } from 'react-router-dom';

import MainPage from '@/pages/MainPage';
import OrderPage from '@/pages/OrderPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
    children: [
      { path: 'orders', element: <OrderPage /> },
      { path: 'map', element: <h1>maps</h1> },
      { path: 'notifications', element: <h1>notifications</h1> },
      { path: 'route', element: <h1>route</h1> },
    ],
  },
]);

export default router;
