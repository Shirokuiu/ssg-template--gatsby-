import React from 'react';

import { CenterLayoutProps } from '@layouts/center-layout/types';

import './center-layout.scss';

function CenterLayout({ children }: CenterLayoutProps) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;
