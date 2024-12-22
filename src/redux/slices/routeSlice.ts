import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Route, RouteInform } from '@/types/route';

export interface RouteState {
  route: RouteInform | null;
  routes: Route[] | null;
  isRouteLoading: boolean;
}

const initialState: RouteState = {
  route: null,
  routes: null,
  isRouteLoading: false,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<RouteInform>) => {
      state.route = action.payload;
    },
    setRoutes: (state, action: PayloadAction<Route[] | null>) => {
      state.routes = action.payload;
    },
    setRouteLoading: (state, action: PayloadAction<boolean>) => {
      state.isRouteLoading = action.payload;
    },
  },
});

export const { setRoute, setRoutes, setRouteLoading } = routeSlice.actions;

export default routeSlice.reducer;
