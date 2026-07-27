// src/store/counter/actions.ts

export const INCREMENT = "counter/INCREMENT" as const;
export const DECREMENT = "counter/DECREMENT" as const;

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

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;