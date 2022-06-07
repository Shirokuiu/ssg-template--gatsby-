import React from 'react';
import { Helmet } from 'react-helmet';
import { ModalProvider } from 'react-simple-modal-provider';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import PageLayout from '@layouts/page-layout/page-layout';
import SvgSpriteIcon from '@shared/svg-sprite-icon/svg-sprite-icon';
import ExampleForm from '@containers/example-form/example-form';
import ExampleTriggerModal from '@containers/example-trigger-modal/example-trigger-modal';
import TestModal from '@containers/test-modal/test-modal';

import Icon from '@assets/img/atention.svg';

function TestPage() {
  return (
    <ModalProvider value={[TestModal]}>
      <Helmet>
        <title>Test page</title>
      </Helmet>
      <PageLayout>
        <ul>
          <li>
            <h1>Hello from test page</h1>
          </li>
          <li>
            <ExampleTriggerModal />
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
            <ExampleForm />
          </li>
          <li>
            <Link to="/">Go home</Link>
          </li>
        </ul>
      </PageLayout>
    </ModalProvider>
  );
}

export default TestPage;
