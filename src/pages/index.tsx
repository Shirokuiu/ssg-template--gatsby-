import * as React from 'react';
import { Link } from 'gatsby';

function IndexPage() {
  return (
    <ul>
      <li>
        <h1>Hello</h1>
      </li>
      <li>
        <Link to="test-page">Test page</Link>
      </li>
    </ul>
  );
}

export default IndexPage;
