import { PayloadAction } from '@reduxjs/toolkit';

import { buildSlice } from '@/shared/lib/store';

import { CounterSchema } from '../types/counterSchema';

const intialState: CounterSchema = {
  value: 0,
};
const counterSlice = buildSlice({
  name: 'counter',
  initialState: intialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    add: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
