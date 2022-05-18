import React from 'react';

import { Props } from '@layouts/center-layout/types';
import './center-layout.scss';

function CenterLayout({ children }: Props) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;