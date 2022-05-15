import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Icon from '@assets/img/atention.svg';
import PageLayout from '@components/shared/page-layout/page-layout';

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
          <Link to="/">Go home</Link>
        </li>
      </ul>
    </PageLayout>
  );
}

export default TestPage;
