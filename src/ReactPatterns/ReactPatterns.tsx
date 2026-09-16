import { Link, Outlet } from "react-router-dom";
import "../HooksUsage/styles.css";
import { appRoutes } from "../AppRoutes";


export const ReactPatterns = () => {
    const parent = appRoutes.find((r) => r.path === "/reactpatterns/*");
    const patternRoutes = parent?.children ?? [];

    return (
        <>
            <h1>React Patterns</h1>
            <div className="content-grid">
                <nav className="nav-column">
                    {patternRoutes.map((route) => (
                        <Link className="route-button" key={route.path} to={route.path}>
                            {route.label}
                        </Link>
                    ))}
                </nav>

                <div className="content-box">
                    <Outlet />
                </div>
            </div>
        </>
    )
}