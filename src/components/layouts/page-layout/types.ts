import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{
  renderFooter?: () => JSX.Element | null;
}>;
