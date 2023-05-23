import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const intialState: UserSchema = {};
const userSlice = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },

    logout: (state) => {
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
