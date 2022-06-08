import React from 'react';

import { PageLayoutProps } from '@layouts/page-layout/types';

import SvgSprite from '@assets/sprites/_sprite.svg';
import './page-layout.scss';

function PageLayout({ children, renderFooter = () => null }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
      <div className="page-layout__footer-wrap">{renderFooter()}</div>
      <SvgSprite className="page-layout__svg-sprite" />
    </div>
  );
}

export default PageLayout;
