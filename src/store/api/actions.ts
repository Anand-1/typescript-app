export const NEXT_PAGE = "api/nextPage" as const;
export const PREVIOUS_PAGE = "api/previousPage" as const;
export const MAX_API_PAGE = 3;

export const nextPage = () => ({ type: NEXT_PAGE });
export const previousPage = () => ({ type: PREVIOUS_PAGE });

export type ApiAction =
  | ReturnType<typeof nextPage>
  | ReturnType<typeof previousPage>;