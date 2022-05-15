import * as React from 'react';
import { Link } from 'gatsby';

import PageLayout from '@components/shared/page-layout/page-layout';

function IndexPage() {
  return (
    <PageLayout renderFooter={() => <h2>Hello from footer content</h2>}>
      <ul>
        <li>
          <h1>Hello</h1>
        </li>
        <li>
          <Link to="test-page">Test page</Link>
        </li>
      </ul>
    </PageLayout>
  );
}

export default IndexPage;
