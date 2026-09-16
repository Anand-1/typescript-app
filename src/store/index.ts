// src/store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// Store configuration pattern: configureStore wires reducers and default middleware.
export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Type inference pattern: exported app types stay synchronized with the store shape.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
