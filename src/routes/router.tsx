import { createBrowserRouter } from 'react-router-dom';

import ExamplePage from '@/pages/ExamplePage';
import SignInPage from '@/pages/SignIn';

const router = createBrowserRouter([
  { path: '/', element: <SignInPage /> },
  { path: '/example', element: <ExamplePage /> },
]);

export default router;
