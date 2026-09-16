// src/store/counter/selectors.ts

import { RootState } from './types';

// Selector pattern: hide the state tree shape behind a reusable read function.
export const selectCount = (state: RootState): number => state.counter.value;
