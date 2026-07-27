// src/store/rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reducers";
// Import other reducers as needed

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;