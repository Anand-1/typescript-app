import { ReactNode } from "react"
import { Link, Outlet } from "react-router-dom";
import "../HooksUsage/styles.css";
import HigherOrder from "./HOC/HigherOrder";
import HigherOrder2 from "./HOC/HigherOrder2";
import HigherOrder3 from "./HOC/HigherOrder3";
import HigherOrderAuthentication from "./HOC/HigherOrderAuthentication";
import Persons from "./HOC/PersonHOC/Persons";
import ProductsListWithSearch from "./HOC/ProductHOC/SearchCard";


type PattternRoute = {
    path: string;
    label: string;
    element: ReactNode;
};

export const ReactPatterns = () => {
    const patternRoutes: PattternRoute[] = [
        { path: "higherorder", label: "Higher Order", element: <HigherOrder /> },
        { path: "higherorder2", label: "Higher Order 2", element: <HigherOrder2 /> },
        { path: "higherorder3", label: "Higher Order 3", element: <HigherOrder3 /> },
        {
            path: "higherorderAuthentication",
            label: "HOC Authentication",
            element: <HigherOrderAuthentication />,
        },
        { path: "hocPerson", label: "Person HOC", element: <Persons /> },
        {
            path: "hoc",
            label: "Product HOC",
            element: <ProductsListWithSearch />,
        }]

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