import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentCustomerInitialState {
  id: number | null;
}

const initialState: CurrentCustomerInitialState = {
  id: null,
};

const currentCustomerIdSlice = createSlice({
  name: 'currentCustomerId',
  initialState,
  reducers: {
    setCustomerId(state, action: PayloadAction<number | null>) {
      state.id = action.payload;
    },
  },
});

export const { setCustomerId } = currentCustomerIdSlice.actions;
export default currentCustomerIdSlice.reducer;
