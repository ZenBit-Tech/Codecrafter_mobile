import { ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import FooterNavigation from './components/FooterNavigation';

import TokenExpiredModal from '@/components/TokenExpiredModal';

const MainPage = (): ReactNode => {
  return (
    <>
      <TokenExpiredModal />
      <Outlet />
      <FooterNavigation />
    </>
  );
};

export default MainPage;
