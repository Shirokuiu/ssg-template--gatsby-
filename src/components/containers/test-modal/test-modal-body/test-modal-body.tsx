import React from 'react';

import { TestModalBodyProps } from '@containers/test-modal/test-modal-body/types';

function TestModalBody({ title }: TestModalBodyProps) {
  return <h1>{title}</h1>;
}

export default TestModalBody;
