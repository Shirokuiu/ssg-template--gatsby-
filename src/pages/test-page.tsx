import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import PageLayout from '@layouts/page-layout/page-layout';
import SvgSpriteIcon from '@shared/svg-sprite-icon/svg-sprite-icon';

import Icon from '@assets/img/atention.svg';

function TestPage() {
  return (
    <PageLayout>
      <ul>
        <li>
          <h1>Hello from test page</h1>
        </li>
        <li>
          <StaticImage placeholder="blurred" src="../assets/img/icon.png" alt="test" />
        </li>
        <li>
          <Icon className="svg-icon" style={{ width: '30px' }} />
        </li>
        <li>
          <SvgSpriteIcon id="telegram" />
        </li>
        <li>
          <SvgSpriteIcon id="phone-call" />
        </li>
        <li>
          <SvgSpriteIcon id="shopping-cart" />
        </li>
        <li>
          <Link to="/">Go home</Link>
        </li>
      </ul>
    </PageLayout>
  );
}

export default TestPage;
