import { ModalId } from '@constants/modal';
import React from 'react';
import { useModal } from 'react-simple-modal-provider';

import TestModalBody from '@containers/test-modal/test-modal-body/test-modal-body';

function ExampleTriggerModal() {
  const { open } = useModal(ModalId.TestModal);

  const handleOpenModal = () => {
    open({
      component: <TestModalBody title="Hello from test modal content" />,
    });
  };

  return (
    <button type="button" onClick={handleOpenModal}>
      Open modal
    </button>
  );
}

export default ExampleTriggerModal;
