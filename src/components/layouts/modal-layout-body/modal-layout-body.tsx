import { useModalProps } from 'react-simple-modal-provider';

import { ModalId } from '@shared/base-modal/types';

function ModalLayoutBody() {
  const { component } = useModalProps(ModalId.BaseModal);

  return component;
}

export default ModalLayoutBody;
