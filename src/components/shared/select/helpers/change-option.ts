import { Option } from '@shared/select/types';

export const changeOption = (options: Option[], selectedOptionValue: string): Option[] =>
  options.map((option) => ({
    ...option,
    isSelected: option.value === selectedOptionValue,
  }));
