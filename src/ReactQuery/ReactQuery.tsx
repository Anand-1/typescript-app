import { useQuery } from "@tanstack/react-query";
import UsersQuery from "./UsersQuery";
import {
  POSTS,
  POSTS_QUERY_KEY,
  POSTS_REQUEST_DELAY,
  REACT_QUERY_DOCS_URL,
  USERS_API_URL,
} from "./constants";
import { Post } from "./types";
import "./ReactQuery.css";

const ReactQuery = () => {
  /* React Query is a library for fetching, caching and updating asynchronous data in React applications. It provides a set of hooks that allow you to easily manage server state in your components.
   In this example, we are using the useQuery hook to fetch a list of posts from a server.
    The queryKey is used to identify the query and the queryFn is a function that returns a 
    promise that resolves to the data we want to fetch. In this case, we are simulating a 
      network request by using the wait function to delay the response by 1 second.
*/
  // Server-state pattern: useQuery owns loading, caching, and refetch behavior for this data.
  const postQuery = useQuery<Post[]>({
    // Query key pattern: stable keys identify cached data across renders.
    queryKey: POSTS_QUERY_KEY,
    queryFn: () => wait(POSTS_REQUEST_DELAY).then(() => [...POSTS]),
  });

  return (
    <section className="react-query-page">
      <header className="react-query-header">
        <h1>React Query Example</h1>
        <p>
          This page demonstrates TanStack Query loading, caching, refetching,
          and separate query sections inside one route.
        </p>
        <div className="react-query-links">
          <a
            href={REACT_QUERY_DOCS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open React Query Docs
          </a>
          <a
            href={USERS_API_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open Users API
          </a>
        </div>
      </header>

      <section className="react-query-panel">
        <div className="react-query-toolbar">
          <h2>Cached Posts</h2>
          <button
            type="button"
            onClick={() => postQuery.refetch()}
            disabled={postQuery.isFetching}
          >
            {postQuery.isFetching ? "Fetching..." : "Refetch Posts"}
          </button>
        </div>

        {postQuery.isLoading && (
          <div className="react-query-state">Loading posts...</div>
        )}
        {postQuery.isError && (
          <div className="react-query-state">Error loading posts.</div>
        )}

        {!postQuery.isLoading && !postQuery.isError && (
          <div className="react-query-grid">
            {postQuery.data?.map((post) => (
              <article className="react-query-card" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <UsersQuery />
    </section>
  );
};

function wait(duration: number) {
  // Promise utility pattern: simulate network latency for the query example.
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default ReactQuery;
