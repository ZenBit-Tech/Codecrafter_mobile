import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import FooterNavigation from './components/FooterNavigation';

const MainPage = (): ReactNode => {
  return (
    <>
      <Outlet />
      <FooterNavigation />
    </>
  );
};

export default MainPage;
