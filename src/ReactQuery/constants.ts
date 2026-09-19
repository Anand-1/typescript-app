import { Post } from "./types";

export const POSTS: Post[] = [
  {
    id: 1,
    title: "Post 1",
    summary: "A cached local post resolved through a simulated request.",
  },
  {
    id: 2,
    title: "Post 2",
    summary: "A second item to show React Query rendering a list of server state.",
  },
];

export const POSTS_QUERY_KEY = ["posts"] as const;
export const USERS_QUERY_KEY = "users";
export const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";
export const REACT_QUERY_DOCS_URL =
  "https://tanstack.com/query/latest/docs/framework/react/overview";
export const USERS_PAGE_SIZE = 4;
export const POSTS_REQUEST_DELAY = 2000;
export const USERS_REQUEST_DELAY = 1000;