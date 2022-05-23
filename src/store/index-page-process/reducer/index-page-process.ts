import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '@store/constants';
import { ActionType } from '@store/index-page-process/action-type';
import { InitialState } from '@store/types/index-page-process';

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
