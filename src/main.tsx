import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import theme from './theme';

import { persistor, store } from '@/redux/store.ts';
import i18n from '@/utils/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ToastContainer />
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </PersistGate>
  </Provider>
);
