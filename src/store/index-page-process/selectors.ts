import { NameSpace } from '@store/constants';
import { State } from '@store/types/state';

export const getTitle = (state: State) => state[NameSpace.IndexPage].title;
