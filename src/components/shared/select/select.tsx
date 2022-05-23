import React, { ChangeEvent, useState } from 'react';

import { Props } from '@shared/select/types';

import './select.scss';

function Select({
  id = 'select',
  name = 'select',
  options = [],
  className = '',
  onChange = () => undefined,
}: Props) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    options.find((option) => option.isSelected)?.value,
  );

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(evt.target.value);
    onChange(evt.target.value);
  };

  return (
    <div className={`select ${className}`.trim()}>
      <div className="select__content">
        <select
          id={id}
          name={name}
          value={selectedValue}
          disabled={options.length === 0}
          onChange={handleSelectChange}
          className="select__item"
        >
          {options.map(({ key, value, label }) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
