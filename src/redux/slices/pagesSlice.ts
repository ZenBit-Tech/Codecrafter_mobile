import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  pageSelected: number;
}

const initialState: CounterState = {
  pageSelected: 2,
};

export const pagesSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.pageSelected = action.payload;
    },
  },
});

export const { changePage } = pagesSlice.actions;

export default pagesSlice.reducer;
