import { createBrowserRouter } from 'react-router-dom';

import { RouteDetails } from '@/components/Details/RouteDetails';
import { RoutesList } from '@/components/Lists/RoutLists';

const router = createBrowserRouter([
  {
    path: '',
    element: <RoutesList />,
  },
  {
    path: 'routes/:id',
    element: <RouteDetails />,
  },
]);

export default router;
