import React from 'react';

import { Props } from '@components/shared/svg-sprite-icon/types';

function SvgSpriteIcon({ id }: Props) {
  return (
    <svg className="svg-icon">
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default SvgSpriteIcon;
