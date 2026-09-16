// src/store/counter/types.ts

// Feature state type: describes the state owned by the counter reducer.
export interface CounterState {
  value: number;
}

// Root state type: mirrors the reducer keys used by combineReducers.
export interface RootState {
  counter: CounterState;
}
