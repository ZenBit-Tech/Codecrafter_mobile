import { createBrowserRouter } from 'react-router-dom';

import ExamplePage from '@/pages/ExamplePage';

const router = createBrowserRouter([{ path: '', element: <ExamplePage /> }]);

export default router;
