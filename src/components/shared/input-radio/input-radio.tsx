import React from 'react';

import { Props } from '@shared/input-radio/types';

import './input-radio.scss';

function InputRadio({
  children = 'Radio',
  id = 'radio',
  value = 'radioItem',
  name = 'radioGroup',
  checkedValue = '',
  onRadioChange = () => undefined,
}: Props) {
  const handleChange = () => {
    onRadioChange(value);
  };

  return (
    <label htmlFor={id} className="input-radio">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        checked={checkedValue === value}
        className="input-radio__input"
      />
      <span className="input-radio__icon" />
      <span className="input-radio__text">{children}</span>
    </label>
  );
}

export default InputRadio;