import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line
export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
