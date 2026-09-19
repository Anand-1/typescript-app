// src/store/counter/selectors.ts

import type { RootState } from "../index";

// Selector pattern: hide the state tree shape behind a reusable read function.
export const selectCount = (state: RootState): number => state.counter.value;
