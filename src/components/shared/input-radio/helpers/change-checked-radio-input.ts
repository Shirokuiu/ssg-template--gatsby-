import { RadioInput } from '@shared/input-radio/types';

export const changeCheckedRadioInput = (btns: RadioInput[], checkedValue: string): RadioInput[] =>
  btns.map((btn) => ({
    ...btn,
    checkedValue,
  }));
