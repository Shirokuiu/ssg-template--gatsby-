export type Props = {
  id?: string;
  name?: string;
  value?: number;
  placeholder?: string;
  min?: number;
  className?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: number | string) => void;
  onKeyDownEnter?: (value: number | string) => void;
};
