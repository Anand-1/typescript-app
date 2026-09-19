import "./styles.css";
import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../AppRoutes";

export const Hooks = () => {
    // Route introspection pattern: reuse appRoutes so the sidebar cannot drift
    // away from the actual nested hook routes.
    const parent = appRoutes.find((r) => r.path === "/hooks/*");
    const hookRoutes = parent?.children ?? [];

    return (
        <section className="example-page">
            <header className="example-header">
                <h1>React Hooks Examples</h1>
                <p>
                    Browse focused examples for state, effects, refs, callback
                    memoization, value memoization, reducers, and custom hooks.
                </p>
                <div className="example-links">
                    <a href="https://react.dev/reference/react/hooks" target="_blank" rel="noreferrer">
                        Open React Hooks Docs
                    </a>
                </div>
            </header>
            <div className="content-grid">
                <nav className="nav-column">
                    {hookRoutes.map((route) => (
                        <Link className="route-button" key={route.path} to={route.path}>
                            {route.label}
                        </Link>
                    ))}
                </nav>

                <div className="content-box">
                    {/* Outlet pattern: React Router renders the matching hook example here. */}
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
