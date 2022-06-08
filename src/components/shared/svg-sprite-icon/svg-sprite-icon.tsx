import React from 'react';

import { SvgSpriteIconProps } from '@shared/svg-sprite-icon/types';

function SvgSpriteIcon({ id, className }: SvgSpriteIconProps) {
  return (
    <svg className={`svg-icon ${className ?? ''}`.trim()}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default SvgSpriteIcon;
