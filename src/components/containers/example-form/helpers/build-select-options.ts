import { makeOptions } from '@shared/select/helpers/make-options';
import { Option } from '@shared/select/types';
import { SelectValue } from '@containers/example-form/types';

const optionLabelMap = {
  [SelectValue.Example1]: 'Пример 1',
  [SelectValue.Example2]: 'Пример 2',
  [SelectValue.Example3]: 'Пример 3',
  [SelectValue.Example4]: 'Пример 4',
  [SelectValue.Example5]: 'Пример 5',
};

export const buildSelectOptions = (): Option[] => makeOptions(SelectValue, optionLabelMap);
