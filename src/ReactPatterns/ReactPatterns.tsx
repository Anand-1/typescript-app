import { Link, Outlet } from "react-router-dom";
import "../HooksUsage/styles.css";
import { appRoutes } from "../AppRoutes";


export const ReactPatterns = () => {
    // Route-driven menu pattern: the navigation is derived from the same config
    // used by <Routes>, avoiding duplicated labels and paths.
    const parent = appRoutes.find((r) => r.path === "/reactpatterns/*");
    const patternRoutes = parent?.children ?? [];

    return (
        <section className="example-page">
            <header className="example-header">
                <h1>React Patterns Examples</h1>
                <p>
                    Browse composition patterns including higher-order
                    components, render props, and container/presentational splits.
                </p>
                <div className="example-links">
                    <a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noreferrer">
                        Open Composition Docs
                    </a>
                </div>
            </header>
            <div className="content-grid">
                <nav className="nav-column">
                    {patternRoutes.map((route) => (
                        <Link className="route-button" key={route.path} to={route.path}>
                            {route.label}
                        </Link>
                    ))}
                </nav>

                <div className="content-box">
                    {/* Nested route outlet: each React pattern example renders inside this content box. */}
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
