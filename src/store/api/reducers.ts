import {
  ApiAction,
  MAX_API_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from "./actions";
import { ApiState } from "./types";

const initialState: ApiState = {
  page: 1,
};

export const apiReducer = (
  state = initialState,
  action: ApiAction
): ApiState => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, page: Math.min(MAX_API_PAGE, state.page + 1) };
    case PREVIOUS_PAGE:
      return { ...state, page: Math.max(1, state.page - 1) };
    default:
      return state;
  }
};