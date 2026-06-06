import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
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
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
