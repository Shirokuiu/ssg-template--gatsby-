import React, { ChangeEvent, useEffect, useState } from 'react';

import { Props } from '@shared/input-number/types';

import './input-number.scss';

function InputNumber({
  id = 'input-number',
  name = 'input-number',
  min = 1,
  value = min,
  placeholder = '0',
  className = '',
  onChange = () => undefined,
}: Props) {
  const [inputValue, setInputValue] = useState<number>(min);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+evt.target.value);
    onChange(+evt.target.value);
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      min={min}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
      pattern="\d*"
      className={`input-number ${className}`.trim()}
    />
  );
}

export default InputNumber;
