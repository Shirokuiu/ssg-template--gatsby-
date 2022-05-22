import { useModalProps } from 'react-simple-modal-provider';

import { Props } from '@layouts/modal-layout-body/types';

function ModalLayoutBody({ modalId }: Props) {
  const { component } = useModalProps(modalId);

  return component;
}

export default ModalLayoutBody;
