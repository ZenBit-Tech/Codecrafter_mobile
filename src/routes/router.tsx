import { createBrowserRouter } from 'react-router-dom';

import { RouteDetails } from '@/components/Details/RouteDetails';
import { RoutesList } from '@/components/Lists/RoutLists';
import ExamplePage from '@/pages/ExamplePage';
import SignInPage from '@/pages/SignIn';

const router = createBrowserRouter([
  { path: '/', element: <SignInPage /> },
  { path: '/example', element: <ExamplePage /> },
  { path: 'routes', element: <RoutesList /> },
  { path: 'routes/:id', element: <RouteDetails /> },
]);

export default router;
