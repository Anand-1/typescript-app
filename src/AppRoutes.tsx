import { ReactElement } from "react";
import GrandParent from "./HooksUsage/DataCommmunication/GrandParent/GrandParent";
import UseStateUsage from "./HooksUsage/UseStateUsage/UseStateUsage";       
import UseEffectUsage from "./HooksUsage/UseEffects/UseEffectUsage";
import UserRefUsage from "./HooksUsage/UseRefs/UseRefUsage";    
import UseCallBackUsage from "./HooksUsage/UseCallBacks/UseCallBackUsage";
import UseMemoUsage from "./HooksUsage/UseMemos/UseMemoUsage";
import CustomHooks from "./HooksUsage/CustomHooks/CustomHooks";
import UseReducerUnd from "./HooksUsage/UseReducers/UseReducerUnd";
import ReactQuery from "./ReactQuery/ReactQuery";
import ReactPortals from "./ReactPortal/reactportals";
import CancelAPI from "./CancelAPI/CancelAPI";
import PromisesPage from "./PromisePage/PromisePage";
import ReactObjservables from "./ReactObservables/ReactObservables";
import ProductsListWithSearch from "./HOC/ProductHOC/SearchCard";
import Landing from "./LazyLoading/Landing";
import ErrorApp from "./ErrorBoundary/MyComponent";
import HigherOrder from "./HOC/HigherOrder";
import HigherOrder2 from "./HOC/HigherOrder2";
import HigherOrder3 from "./HOC/HigherOrder3";
import HigherOrderAuthentication from "./HOC/HigherOrderAuthentication";
import Persons from "./HOC/PersonHOC/Persons";
import ParentComponent from "./RenderProps/MouseTracker/ParentComponent";
type AppRoute = {
  path: string;
  label: string;
  element: ReactElement;
};


export const appRoutes: AppRoute[] = [
  { path: "/grandparent", label: "Grand Parent", element: <GrandParent /> },
  { path: "/useStates", label: "Use State", element: <UseStateUsage /> },
  { path: "/useEffects", label: "Use Effect", element: <UseEffectUsage /> },
  { path: "/useRefs", label: "Use Ref", element: <UserRefUsage /> },
  {
    path: "/useCallbacks",
    label: "Use Callback",
    element: <UseCallBackUsage />,
  },
  { path: "/useMemos", label: "Use Memo", element: <UseMemoUsage /> },
  { path: "/useCustoms", label: "Custom Hooks", element: <CustomHooks /> },
  { path: "/usereducers", label: "Use Reducer", element: <UseReducerUnd /> },
  {
    path: "/hoc",
    label: "Product HOC",
    element: <ProductsListWithSearch />,
  },
  { path: "/reactQuery", label: "React Query", element: <ReactQuery /> },
  { path: "/reactportals", label: "React Portals", element: <ReactPortals /> },
  { path: "/cancelAPI", label: "Cancel API", element: <CancelAPI /> },
  { path: "/promisepage", label: "Promise Page", element: <PromisesPage /> },
  {
    path: "/reactobservables",
    label: "React Observables",
    element: <ReactObjservables />,
  },
  { path: "/lazyloading", label: "Lazy Loading", element: <Landing /> },
  { path: "/errorboundary", label: "Error Boundary", element: <ErrorApp /> },
  { path: "/higherorder", label: "Higher Order", element: <HigherOrder /> },
  { path: "/higherorder2", label: "Higher Order 2", element: <HigherOrder2 /> },
  { path: "/higherorder3", label: "Higher Order 3", element: <HigherOrder3 /> },
  {
    path: "/higherorderAuthentication",
    label: "HOC Authentication",
    element: <HigherOrderAuthentication />,
  },
  { path: "/hocPerson", label: "Person HOC", element: <Persons /> },
  { path: "/renderProps", label: "Render Props", element: <ParentComponent /> },
];
