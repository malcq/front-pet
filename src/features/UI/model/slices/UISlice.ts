import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UISchema } from '../types/UIShema';

const initialState: UISchema = {
  scroll: {},
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string; position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: uiSliceActions } = uiSlice;
export const { reducer: uiSliceReducer } = uiSlice;
