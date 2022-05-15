import { State } from '@store/types/state';
import { NameSpace } from '@store/constants';

export const getTitle = (state: State) => state[NameSpace.IndexPage].title;
