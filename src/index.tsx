import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { GRAPHQL_API_URL } from "./GraphQL/constants";
// React Query pattern: one QueryClient instance is created at the app boundary
// so every nested route can share the same server-state cache.
const queryClient = new QueryClient();

// React 18 root API: createRoot enables the concurrent-capable renderer.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_API_URL }),
  cache: new InMemoryCache(),
});
root.render(
  // <React.StrictMode>
  // Provider pattern: expose QueryClient through React context instead of
  // passing it manually through each route component.
  <Provider store={store}>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ApolloProvider>
  </Provider>
);
