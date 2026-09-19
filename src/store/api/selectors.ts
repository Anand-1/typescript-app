import type { RootState } from "../rootReducer";

export const selectApiPage = (state: RootState): number => state.api.page;