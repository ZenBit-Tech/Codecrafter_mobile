import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { persistRouteConfig } from '@/redux/persistConfig';
import { Route, RouteInform } from '@/types/route';

export interface RouteState {
  currentRouteId: number | null;
  route: RouteInform | null;
  routes: Route[] | null;
  isRouteLoading: boolean;
}

const initialState: RouteState = {
  currentRouteId: null,
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
    setCurrentRouteId: (state, action: PayloadAction<number | null>) => {
      state.currentRouteId = action.payload;
    },
  },
});

export const { setRoute, setRoutes, setRouteLoading, setCurrentRouteId } =
  routeSlice.actions;

export default persistReducer(persistRouteConfig, routeSlice.reducer);
