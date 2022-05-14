import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Icon from '@assets/img/atention.svg';

function TestPage() {
  return (
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
  );
}

export default TestPage;
