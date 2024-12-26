import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { persistRouteConfig } from '@/redux/persistConfig';
import { Address, Route, RouteInform } from '@/types/route';

export interface RouteState {
  currentRouteId: number | null;
  route: RouteInform | null;
  routes: Route[] | null;
  isRouteLoading: boolean;
  validAddresses: Address[];
  driverAddress: Address | null;
  isAddressesLoading: boolean;
}

const initialState: RouteState = {
  currentRouteId: null,
  route: null,
  routes: null,
  isRouteLoading: false,
  validAddresses: [],
  driverAddress: null,
  isAddressesLoading: false,
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
    setValidAddresses: (state, action: PayloadAction<Address[]>) => {
      state.validAddresses = action.payload;
    },
    setDriverAddress: (state, action: PayloadAction<Address | null>) => {
      state.driverAddress = action.payload;
    },
    setIsAddressesLoading: (state, action: PayloadAction<boolean>) => {
      state.isAddressesLoading = action.payload;
    },
  },
});

export const {
  setRoute,
  setRoutes,
  setRouteLoading,
  setCurrentRouteId,
  setValidAddresses,
  setDriverAddress,
  setIsAddressesLoading,
} = routeSlice.actions;

export default persistReducer(persistRouteConfig, routeSlice.reducer);
