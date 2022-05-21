import React from 'react';
import { useModal } from 'react-simple-modal-provider';

import { ModalId } from '@shared/base-modal/types';
import TestModal from '@containers/test-modal/test-modal';

function Btn() {
  const { open: openModal } = useModal(ModalId.BaseModal);

  const handleOpenModal = () => {
    openModal({
      component: <TestModal />,
    });
  };

  return (
    <button type="button" onClick={handleOpenModal}>
      Open modal
    </button>
  );
}

export default Btn;
