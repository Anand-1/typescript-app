import React from 'react';
import { useQuery } from "@tanstack/react-query";

const UsersQuery = () => {
    const { data, error, isLoading, refetch,isFetching } = useQuery({ queryKey: ['users'], queryFn: ()=> wait(1000).then(() => fetchUsers()) });
    if (isLoading) return <h1>Loading Users...</h1>;
    if (error) return <h1>Error loading users...</h1>;
    if (isFetching) return <h1>Fetching users...</h1>;
    return (
        <>
            <h2>Users</h2>
            <ul>
                {data?.map((user: { id: number; name: string }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={() => refetch()}>Refetch Users</button>
        </>
    );
};

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function wait(duration: number) {
  // Promise utility pattern: simulate network latency for the query example.
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default UsersQuery;