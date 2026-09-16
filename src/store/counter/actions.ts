// src/store/counter/actions.ts

export const INCREMENT = "counter/INCREMENT" as const;
export const DECREMENT = "counter/DECREMENT" as const;

// Action creator pattern: wrap action objects in functions for consistent payload shape.
export const increment = (numberToIncrement: number = 1) => ({
  type: INCREMENT,
  payload: {
    incrementBy: numberToIncrement,
  },
});

export const decrement = (numberToDecrement: number = 1) => ({
  type: DECREMENT,
  payload: {
    decrementBy: numberToDecrement,
  },
});

// Discriminated union pattern: reducer action types are inferred from action creators.
export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;
