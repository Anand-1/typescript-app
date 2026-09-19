import { useQuery } from "@apollo/client/react";
import ApiPageControls from "../store/ApiPageControls";
import { selectApiPage } from "../store/api/selectors";
import { useAppSelector } from "../store/hooks";
import { GRAPHQL_API_URL } from "./constants";
import { GET_CHARACTERS } from "./queries";
import { CharactersData } from "./types";
import "./GraphQLExample.css";

const GraphQLExample = () => {
  const page = useAppSelector(selectApiPage);

  // Apollo useQuery pattern: the component reads server data from the ApolloProvider client.
  const { data, loading, error, refetch, networkStatus } = useQuery<CharactersData>(
    GET_CHARACTERS,
    {
      variables: { page },
      notifyOnNetworkStatusChange: true,
    }
  );

  const isRefetching = networkStatus === 4;

  return (
    <section className="graphql-page">
      <header className="graphql-header">
        <h1>GraphQL Apollo Example</h1>
        <p>
          This page queries the Rick and Morty GraphQL API through the Apollo
          Client configured in index.tsx.
        </p>
        <a
          className="graphql-link"
          href={GRAPHQL_API_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open GraphQL API
        </a>
      </header>

      <ApiPageControls />

      <pre className="graphql-query">
        <code>{GET_CHARACTERS.loc?.source.body}</code>
      </pre>

      <div className="graphql-toolbar">
        <h2>Characters</h2>
        <button type="button" onClick={() => refetch()} disabled={loading}>
          {isRefetching ? "Refetching..." : "Refetch"}
        </button>
      </div>

      {loading && <div className="graphql-state">Loading characters...</div>}
      {error && <div className="graphql-state">Error: {error.message}</div>}

      {!loading && !error && (
        <div className="graphql-grid">
          {data?.characters.results.map((character) => (
            <article className="graphql-card" key={character.id}>
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default GraphQLExample;
