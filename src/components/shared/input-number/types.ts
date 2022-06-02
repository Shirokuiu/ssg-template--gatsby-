export type Props = {
  id?: string;
  name?: string;
  value?: number;
  placeholder?: string;
  min?: number;
  className?: string;
  onChange?: (value: number) => void;
  onBlur?: (value: number) => void;
  onKeyDownEnter?: (value: number) => void;
};
