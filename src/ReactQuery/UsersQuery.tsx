import { useQuery } from "@tanstack/react-query";

type User = {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
};

const UsersQuery = () => {
    return (
        <UsersQueryContent />
    );
};

const UsersQueryContent = () => {
    // React Query API pattern: use a unique key for the remote users resource.
    const { data, error, isLoading, refetch, isFetching } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: () => wait(1000).then(() => fetchUsers()),
    });

    return (
        <section className="react-query-panel">
            <div className="react-query-toolbar">
                <h2>Remote Users</h2>
                <button type="button" onClick={() => refetch()} disabled={isFetching}>
                    {isFetching ? "Fetching..." : "Refetch Users"}
                </button>
            </div>

            {isLoading && <div className="react-query-state">Loading users...</div>}
            {error && <div className="react-query-state">Error loading users.</div>}

            {!isLoading && !error && (
                <div className="react-query-grid">
                    {data?.map((user) => (
                        <article className="react-query-card" key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>Company: {user.company.name}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

async function fetchUsers(): Promise<User[]> {
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
