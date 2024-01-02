import { useQuery } from "@tanstack/react-query";

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
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postQuery.isLoading) return <h1>Loading ...</h1>;

  return (
    <>
      <h1>React Query</h1>
    </>
  );
};

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default ReactQuery;
