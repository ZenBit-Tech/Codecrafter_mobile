import { ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';

function App(): ReactNode {
  return <RouterProvider router={router} />;
}

export default App;
