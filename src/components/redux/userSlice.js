import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { users: [] },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});
