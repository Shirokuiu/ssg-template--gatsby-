import React from 'react';

import { Props } from '@components/shared/center-layout/types';
import '@components/shared/center-layout/center-layout.scss';

function CenterLayout({ children }: Props) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;
