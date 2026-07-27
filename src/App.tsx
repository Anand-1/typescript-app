import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import BreadCrumbs from "./Features/BreadCrumbs";
import { appRoutes } from "./AppRoutes";

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
      <BrowserRouter>
        <BreadCrumbs />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            {appRoutes.map((route) =>
              route.children ? (
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
