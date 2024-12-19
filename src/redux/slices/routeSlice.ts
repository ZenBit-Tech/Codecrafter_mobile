import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Route, RouteInform } from '@/types/route';

export interface RouteState {
  route: RouteInform | null;
  routes: Route[] | null;
}

const initialState: RouteState = {
  route: null,
  routes: null,
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
  },
});

export const { setRoute, setRoutes } = routeSlice.actions;

export default routeSlice.reducer;
