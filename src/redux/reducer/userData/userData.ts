import { createSlice, current } from '@reduxjs/toolkit';

import { StoreState } from '../../../interface/Iprop';
import { ActionType } from '../../interface';

const initialState = {
  ...(JSON.parse(
    localStorage.getItem('userData') ||
      JSON.stringify({
        userData: {}
      })
  ) as StoreState)
};

const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loginUser: (state, action: ActionType) => {
      const { name, password } = action.payload;
      state.userData.username = name;
      state.userData.password = password;
      localStorage.setItem('userData', JSON.stringify(state));
    },
    logout: state => {
      state.userData.username = '';
      state.userData.password = '';
      localStorage.setItem('userData', JSON.stringify(state));
    }
  }
});

export const { loginUser, logout } = userData.actions;

export default userData.reducer;
