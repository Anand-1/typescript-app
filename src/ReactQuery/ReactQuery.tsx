import { useQuery } from "@tanstack/react-query";
import UsersQuery from "./UsersQuery";

const POSTS = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];

const ReactQuery = () => {

  /* React Query is a library for fetching, caching and updating asynchronous data in React applications. It provides a set of hooks that allow you to easily manage server state in your components.
   In this example, we are using the useQuery hook to fetch a list of posts from a server.
    The queryKey is used to identify the query and the queryFn is a function that returns a 
    promise that resolves to the data we want to fetch. In this case, we are simulating a 
      network request by using the wait function to delay the response by 1 second.
*/
  // Server-state pattern: useQuery owns loading, caching, and refetch behavior for this data.
  const postQuery = useQuery({
    // Query key pattern: stable keys identify cached data across renders.
    queryKey: ["posts"],
    queryFn: () => wait(2000).then(() => [...POSTS]),
  });

  // Async UI state pattern: render a loading branch before data is available.
  if (postQuery.isLoading) return <h1>Loading ...</h1>;
  if (postQuery.isError) return <h1>Error ...</h1>;
  if (postQuery.isPending) return <h1>Pending ...</h1>;
  if (postQuery.isFetching) return <h1>Fetching ...</h1>;

  return (
    <>
      <h1>React Query</h1>
      <ul>
        {postQuery.data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <hr />
      <button onClick={() => postQuery.refetch()}>Refetch</button>
      <UsersQuery />
    </>
  );
};

function wait(duration: number) {
  // Promise utility pattern: simulate network latency for the query example.
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default ReactQuery;
