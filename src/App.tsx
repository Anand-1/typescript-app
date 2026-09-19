import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import BreadCrumbs from "./Features/BreadCrumbs";
import { appRoutes } from "./AppRoutes";

// Local route component pattern: Home is colocated because it is only used by
// App and renders navigation from the shared route configuration.
const Home = () => {
  return (
    <main className="home-page">
      <header className="home-header">
        <h1>React TypeScript Examples</h1>
        <p>Pick a route to open one of the examples.</p>
      </header>

      <div className="route-grid">
        {appRoutes.map((route) => (
          <Link className="route-button" key={route.path} to={route.path}>
            {route.label}
          </Link>
        ))}
      </div>
    </main>
  );
};

function App() {
  return (
    <div className="App">
      {/* Router boundary pattern: BrowserRouter owns history and exposes route state to descendants. */}
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {/* Shared layout pattern: breadcrumbs live outside <Routes> so they render for every page. */}
        <BreadCrumbs />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Configuration-driven routing: appRoutes is the single source for home links and route elements. */}
            {appRoutes.map((route) =>
              route.children ? (
                // Nested route pattern: parent pages render an <Outlet /> where child examples appear.
                <Route key={route.path} path={route.path} element={route.element}>
                  {route.children.map((child) => (
                    <Route key={`${route.path}-${child.path}`} path={child.path} element={child.element} />
                  ))}
                </Route>
              ) : (
                <Route key={route.path} path={route.path} element={route.element} />
              )
            )}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
