import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderData } from '@/types/orders';

export interface RouteState {
  orders: OrderData[] | null;
}

const initialState: RouteState = {
  orders: null,
};

const ordereSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<OrderData[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrders } = ordereSlice.actions;

export default ordereSlice.reducer;
