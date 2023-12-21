import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
