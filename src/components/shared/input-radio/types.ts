import { ReactNode } from 'react';

export type Props = {
  id?: string;
  name?: string;
  value?: string;
  checkedValue?: string;
  onRadioChange?: (value: string) => void;
  children?: ReactNode;
};

export type RadioInput = {
  key: number;
  id: string;
  value: string;
  name: string;
  label: string;
  checkedValue: string;
};
