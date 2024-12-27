import { ReactNode } from 'react';

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import router from './routes/router';

function App(): ReactNode {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
