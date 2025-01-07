import { ReactNode } from 'react';

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useNavigationCaching } from './hooks/useNavigationCaching';
import router from './routes/router';

function App(): ReactNode {
  useNavigationCaching();

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
