// src/store/rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reducers";
import { apiReducer } from "./api/reducers";
// Import other reducers as needed

// Root reducer pattern: combine feature reducers under stable state keys.
export const rootReducer = combineReducers({
  counter: counterReducer,
  api: apiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
