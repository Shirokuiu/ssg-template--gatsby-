import React from 'react';

import { Props } from '@layouts/page-layout/types';
import './page-layout.scss';
import SvgSprite from '@assets/sprites/_sprite.svg';

function PageLayout({ children, renderFooter = () => null }: Props) {
  return (
    <div className="page-layout">
      <div className="page-layout__content">{children}</div>
      <div className="page-layout__footer-wrap">{renderFooter()}</div>
      <SvgSprite className="page-layout__svg-sprite" />
    </div>
  );
}

export default PageLayout;
