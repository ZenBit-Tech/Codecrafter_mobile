import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RouteResponse } from '@/interfaces/RouteResponse';

export const routesApi = createApi({
  reducerPath: 'routes',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getRoutes: builder.query<RouteResponse[], void>({
      query: () => '/routes',
    }),
  }),
});

export const { useGetRoutesQuery } = routesApi;

const routesSlice = createSlice({
  name: 'routes',
  initialState: [],
  reducers: {},
});

export default routesSlice.reducer;
