import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UnreadNotificationsSliceState {
  count: number | null;
}

const initialState: UnreadNotificationsSliceState = {
  count: null,
};

const unreadNotificationsSlice = createSlice({
  name: 'unreadNotificationsSlice',
  initialState,
  reducers: {
    setUnreadMessages(store, action: PayloadAction<null | number>) {
      store.count = action.payload;
    },
  },
});

export const { setUnreadMessages } = unreadNotificationsSlice.actions;
export default unreadNotificationsSlice.reducer;
