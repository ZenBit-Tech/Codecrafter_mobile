import { createSlice } from '@reduxjs/toolkit';

import { RouteResponse } from '@/interfaces/RouteResponse';

interface RoutesState {
  routes: RouteResponse[];
  loading: boolean;
  error: string | null;
}

const initialState: RoutesState = {
  routes: [],
  loading: false,
  error: null,
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRoutes, setLoading, setError } = routesSlice.actions;
export default routesSlice.reducer;
