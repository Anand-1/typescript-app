// src/store/counter/selectors.ts

import { RootState } from './types';

export const selectCount = (state: RootState): number => state.counter.value;
