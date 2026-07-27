import { ReactNode } from "react"
import "./styles.css";
import { Link, Outlet } from "react-router-dom";
import UseStateUsage from "./UseStateUsage/UseStateUsage";
import UseEffectUsage from "./UseEffects/UseEffectUsage";
import UseCallBackUsage from "./UseCallBacks/UseCallBackUsage";
import UseMemoUsage from "./UseMemos/UseMemoUsage";
import CustomHooks from "./CustomHooks/CustomHooks";
import UseReducerUnd from "./UseReducers/UseReducerUnd";
import UserRefUsage from "./UseRefs/UseRefUsage";

type HookRoute = {
    path: string;
    label: string;
    element: ReactNode;
};

export const Hooks = () => {

    const hookRoutes: HookRoute[] = [
        { path: "useStates", label: "Use State", element: <UseStateUsage /> },
        { path: "useEffects", label: "Use Effect", element: <UseEffectUsage /> },
        { path: "useRefs", label: "Use Ref", element: <UserRefUsage /> },
        {
            path: "useCallbacks",
            label: "Use Callback",
            element: <UseCallBackUsage />,
        },
        { path: "useMemos", label: "Use Memo", element: <UseMemoUsage /> },
        { path: "useCustoms", label: "Custom Hooks", element: <CustomHooks /> },
        { path: "usereducers", label: "Use Reducer", element: <UseReducerUnd /> },]
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
                    <Outlet />
                </div>
            </div></>
    )
}


