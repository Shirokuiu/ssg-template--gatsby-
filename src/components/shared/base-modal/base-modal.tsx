import React from 'react';
import Modal, { modalAnimation, useModalState } from 'react-simple-modal-provider';

import ModalLayoutBody from '@layouts/modal-layout-body/modal-layout-body';
import { ModalId, Props } from '@shared/base-modal/types';

function BaseModal({ children }: Props) {
  const [isOpen, setOpen] = useModalState();

  return (
    <Modal
      id={ModalId.BaseModal}
      consumer={children}
      animation={modalAnimation.slideDown}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <ModalLayoutBody modalId={ModalId.BaseModal} />
    </Modal>
  );
}

export default BaseModal;
