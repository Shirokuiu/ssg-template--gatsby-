import React from 'react';

import { Props } from '@shared/svg-sprite-icon/types';

function SvgSpriteIcon({ id, className }: Props) {
  return (
    <svg className={`svg-icon ${className ?? ''}`.trim()}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default SvgSpriteIcon;
