import { createSlice } from '@reduxjs/toolkit';

import { ActionType } from '@store/index-page-process/action-type';
import { InitialState } from '@store/types/index-page-process';
import { NameSpace } from '@store/constants';

const initialState: InitialState = {
  title: 'Hello',
};

export const indexPageProcess = createSlice({
  name: NameSpace.IndexPage,
  initialState,
  reducers: {
    [ActionType.ClearState](state) {
      state.title = 'State is cleared';
    },
  },
});

export const { clearState } = indexPageProcess.actions;
