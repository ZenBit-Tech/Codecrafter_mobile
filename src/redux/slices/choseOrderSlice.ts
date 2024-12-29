import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChoseOrderInterface {
  value: number | null;
}

const initialState: ChoseOrderInterface = {
  value: null,
};

const choseOrderSlice = createSlice({
  name: 'choseOrderSlice',
  initialState,
  reducers: {
    setChoseOrder(store, action: PayloadAction<number | null>) {
      store.value = action.payload;
    },
  },
});

export const { setChoseOrder } = choseOrderSlice.actions;
export default choseOrderSlice.reducer;
