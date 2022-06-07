export type Props = {
  id?: string;
  value?: string;
  name?: string;
  options?: Option[];
  className?: string;
  onChange?: (evt: EvtSelect) => void;
};

export type Option = {
  key: number;
  value: string;
  label: string;
};

export type EvtSelect = {
  target: {
    name: string;
    value: string;
  };
};
