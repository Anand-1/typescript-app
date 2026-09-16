import "./styles.css";
import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../AppRoutes";

export const Hooks = () => {
    // Route introspection pattern: reuse appRoutes so the sidebar cannot drift
    // away from the actual nested hook routes.
    const parent = appRoutes.find((r) => r.path === "/hooks/*");
    const hookRoutes = parent?.children ?? [];

    return (
        <>
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
        </>
    )
}

