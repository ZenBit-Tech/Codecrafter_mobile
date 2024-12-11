import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RouteInform } from '@/types/route';

export interface RouteState {
  route: RouteInform | null;
}

const initialState: RouteState = {
  route: null,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<RouteInform>) => {
      state.route = action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;

export default routeSlice.reducer;
