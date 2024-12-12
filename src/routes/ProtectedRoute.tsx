import React from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, role } = useAppSelector((state) => state.auth);

  if (isAuthenticated && role === 'driver') {
    return children;
  }

  return <Navigate to='/' />;
};

export default ProtectedRoute;
