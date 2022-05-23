import { useEffect } from 'react';
import { useModalProps } from 'react-simple-modal-provider';

import { Props } from '@layouts/modal-layout-body/types';

import './modal-layout-body.scss';

function ModalLayoutBody({ modalId }: Props) {
  const { component } = useModalProps(modalId);
  const { documentElement } = document;

  useEffect(() => {
    documentElement.classList.add('modal-layout-body--modal-open');

    return () => {
      documentElement.classList.remove('modal-layout-body--modal-open');
    };
  }, []);

  return component;
}

export default ModalLayoutBody;
