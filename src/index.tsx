import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query pattern: one QueryClient instance is created at the app boundary
// so every nested route can share the same server-state cache.
const queryClient = new QueryClient();

// React 18 root API: createRoot enables the concurrent-capable renderer.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  // Provider pattern: expose QueryClient through React context instead of
  // passing it manually through each route component.
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  // </React.StrictMode>
);
