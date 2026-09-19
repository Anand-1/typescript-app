import { useQuery } from "@tanstack/react-query";
import ApiPageControls from "../store/ApiPageControls";
import { selectApiPage } from "../store/api/selectors";
import { useAppSelector } from "../store/hooks";
import {
    USERS_API_URL,
    USERS_PAGE_SIZE,
    USERS_QUERY_KEY,
    USERS_REQUEST_DELAY,
} from "./constants";
import { User } from "./types";

const UsersQuery = () => {
    return (
        <UsersQueryContent />
    );
};

const UsersQueryContent = () => {
    const page = useAppSelector(selectApiPage);

    // React Query API pattern: use a unique key for the remote users resource.
    const { data, error, isLoading, refetch, isFetching } = useQuery<User[]>({
        queryKey: [USERS_QUERY_KEY, page],
        queryFn: () => wait(USERS_REQUEST_DELAY).then(() => fetchUsers(page)),
    });

    return (
        <section className="react-query-panel">
            <ApiPageControls />
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

async function fetchUsers(page: number): Promise<User[]> {
    const response = await fetch(
        `${USERS_API_URL}?_page=${page}&_limit=${USERS_PAGE_SIZE}`
    );
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
