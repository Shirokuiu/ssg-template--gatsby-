export type Props = {
  id?: string;
  name?: string;
  options?: Option[];
  className?: string;
  onChange?: (value: string) => void;
};

export type Option = {
  key: number;
  value: string;
  label: string;
  isSelected: boolean;
};
