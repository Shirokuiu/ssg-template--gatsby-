import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '@store/constants';
import { indexPageProcess } from '@store/index-page-process/reducer/index-page-process';

export const rootReducer = combineReducers({
  [NameSpace.IndexPage]: indexPageProcess.reducer,
});
