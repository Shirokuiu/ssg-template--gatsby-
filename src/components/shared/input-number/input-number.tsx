import React, { ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useState } from 'react';

import { Props } from '@shared/input-number/types';

function InputNumber({
  id = 'input-number',
  name = 'input-number',
  min = 1,
  value = 1,
  placeholder = '0',
  className = '',
  onChange = () => undefined,
  onBlur = () => undefined,
  onKeyDownEnter = () => undefined,
}: Props) {
  const [inputValue, setInputValue] = useState<number | string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    onChange(evt.target.value);
  };

  const handleInputBlur = () => {
    onBlur(inputValue);
  };

  const handleInputKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      onKeyDownEnter(inputValue);
    }
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    evt.target.select();
  };

  return (
    <input
      type="number"
      id={id}
      name={name}
      min={min}
      value={inputValue}
      placeholder={placeholder}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      className={`input-number ${className}`.trim()}
    />
  );
}

export default InputNumber;
