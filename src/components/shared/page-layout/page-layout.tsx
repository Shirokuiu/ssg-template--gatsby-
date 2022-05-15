import React from 'react';

import { Props } from '@components/shared/page-layout/types';
import './page-layout.scss';

function PageLayout({ children, renderFooter = () => null }: Props) {
  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
      <div className="page-layout__footer-wrap">{renderFooter()}</div>
    </div>
  );
}

export default PageLayout;
