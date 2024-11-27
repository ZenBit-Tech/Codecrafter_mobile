import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteResponse } from '@/interfaces/RouteResponse';
import { useGetRoutesQuery } from '@/redux/slices/route/routeSlice';

export const RoutesList: React.FC = () => {
  const { data: routes, isLoading, error } = useGetRoutesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching routes: {JSON.stringify(error, null)}</p>;
  }

  if (!routes || routes.length === 0) {
    return <p>No routes found.</p>;
  }

  return (
    <ul>
      {routes.map((route: RouteResponse) => (
        <li key={route.id}>
          <button
            type='button'
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: 'blue',
              textAlign: 'left',
              padding: 0,
            }}
            onClick={() => navigate(`/routes/${route.id}`)}
          >
            <h3>Route ID: {route.id}</h3>
            <p>Status: {route.status}</p>
            <p>Distance: {route.distance} km</p>
          </button>
        </li>
      ))}
    </ul>
  );
};
