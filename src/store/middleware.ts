import { Middleware } from "@reduxjs/toolkit";
import { NEXT_PAGE, PREVIOUS_PAGE } from "./api/actions";

const apiPageActions = new Set<string>([NEXT_PAGE, PREVIOUS_PAGE]);

export const apiPageMiddleware: Middleware = ({ getState }) => (next) => (
  action
) => {
  const result = next(action);

  if (
    process.env.NODE_ENV !== "production" &&
    typeof action === "object" &&
    action !== null &&
    "type" in action &&
    apiPageActions.has(action.type as string)
  ) {
    console.debug("Redux API page changed:", getState().api.page);
  }

  return result;
};