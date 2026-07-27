// src/store/counter/types.ts

export interface CounterState {
  value: number;
}

export interface RootState {
  counter: CounterState;
}