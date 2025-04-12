import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    email: '', 
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload; 
    },
  },
});

export const emailActions = emailSlice.actions;

export default emailSlice;