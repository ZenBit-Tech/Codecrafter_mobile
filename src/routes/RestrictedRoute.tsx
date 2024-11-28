import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';

interface RestrictedRouteProps {
  children: JSX.Element;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children }) => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);

  if (isAuthenticated && role === 'driver') {
    return <Navigate to='/app' />;
  }

  return children;
};

export default RestrictedRoute;
