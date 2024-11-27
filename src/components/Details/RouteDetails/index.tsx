import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetRoutesQuery } from '@/redux/slices/route/routeSlice';

export const RouteDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: routes, isLoading, error } = useGetRoutesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching route details: {JSON.stringify(error, null)}</p>;
  }

  const selectedRoute = routes?.find((r) => r.id.toString() === id); // Переименовали переменную

  if (!selectedRoute) {
    return <p>Route not found.</p>;
  }

  return (
    <div>
      <h3>Route ID: {selectedRoute.id}</h3>
      <p>Status: {selectedRoute.status}</p>
      <p>Distance: {selectedRoute.distance} km</p>
      <p>
        Submission Date:{' '}
        {new Date(selectedRoute.submission_date).toLocaleDateString()}
      </p>
      <p>
        Arrival Date:{' '}
        {new Date(selectedRoute.arrival_date).toLocaleDateString()}
      </p>
      <h4>User Info:</h4>
      <p>Name: {selectedRoute.user_id.full_name}</p>
      <p>Email: {selectedRoute.user_id.email}</p>
      <p>Phone: {selectedRoute.user_id.phone_number}</p>
      <h4>Company Info:</h4>
      <p>Company Name: {selectedRoute.company_id.name}</p>
      <p>Company Email: {selectedRoute.company_id.email}</p>
    </div>
  );
};
