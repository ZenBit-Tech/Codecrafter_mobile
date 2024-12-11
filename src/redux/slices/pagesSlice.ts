import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getPageFromUrl } from '@/utils/pageUtils';

interface CounterState {
  pageSelected: number;
}

const initialState: CounterState = {
  pageSelected: getPageFromUrl(),
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
