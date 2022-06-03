import { ModalId } from '@constants/modal';
import { ModalProps } from '@type/modal';
import React from 'react';
import Modal, { modalAnimation, useModalState } from 'react-simple-modal-provider';

import ModalLayoutBody from '@layouts/modal-layout-body/modal-layout-body';

function TestModal({ children }: ModalProps) {
  const [isOpen, setOpen] = useModalState();

  return (
    <Modal
      id={ModalId.TestModal}
      consumer={children}
      animation={modalAnimation.slideDown}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <ModalLayoutBody modalId={ModalId.TestModal} />
    </Modal>
  );
}

export default TestModal;
