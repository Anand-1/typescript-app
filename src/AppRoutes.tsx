import { ReactElement } from "react";
import ReactQuery from "./ReactQuery/ReactQuery";
import ReactPortals from "./ReactPortal/reactportals";
import CancelAPI from "./CancelAPI/CancelAPI";
import PromisesPage from "./PromisePage/PromisePage";
import ReactObjservables from "./ReactObservables/ReactObservables";
import ErrorApp from "./ReactPatterns/ErrorBoundary/MyComponent";
import ParentComponent from "./ReactPatterns/RenderProps/MouseTracker/ParentComponent";
import LearningSlider from "./LearningSlider/LearningSlider";
import ImageSlider from "./ImageSlider/ImageSlider";
import GenericCarouselDemo from "./Components/GenericCarouselDemo";
import { Hooks } from "./HooksUsage/hooks";
import UseStateUsage from "./HooksUsage/UseStateUsage/UseStateUsage";
import UseEffectUsage from "./HooksUsage/UseEffects/UseEffectUsage";
import UseRefUsage from "./HooksUsage/UseRefs/UseRefUsage";
import UseCallBackUsage from "./HooksUsage/UseCallBacks/UseCallBackUsage";
import UseMemoUsage from "./HooksUsage/UseMemos/UseMemoUsage";
import CustomHooks from "./HooksUsage/CustomHooks/CustomHooks";
import UseReducerUnd from "./HooksUsage/UseReducers/UseReducerUnd";
import { ReactPatterns } from "./ReactPatterns/ReactPatterns";
import HigherOrder from "./ReactPatterns/HOC/HigherOrder";
import HigherOrder2 from "./ReactPatterns/HOC/HigherOrder2";
import HigherOrder3 from "./ReactPatterns/HOC/HigherOrder3";
import HigherOrderAuthentication from "./ReactPatterns/HOC/HigherOrderAuthentication";
import Persons from "./ReactPatterns/HOC/PersonHOC/Persons";
import ProductsListWithSearch from "./ReactPatterns/HOC/ProductHOC/SearchCard";

type AppRoute = {
  path: string;
  label: string;
  element: ReactElement;
  children?: AppRoute[];
};


export const appRoutes: AppRoute[] = [
  {
    path: "/hooks/*",
    label: "Hooks Usages",
    element: <Hooks />,
    children: [
      { path: "useStates", label: "Use State", element: <UseStateUsage /> },
      { path: "useEffects", label: "Use Effect", element: <UseEffectUsage /> },
      { path: "useRefs", label: "Use Ref", element: <UseRefUsage /> },
      { path: "useCallbacks", label: "Use Callback", element: <UseCallBackUsage /> },
      { path: "useMemos", label: "Use Memo", element: <UseMemoUsage /> },
      { path: "useCustoms", label: "Custom Hooks", element: <CustomHooks /> },
      { path: "usereducers", label: "Use Reducer", element: <UseReducerUnd /> },
    ],
  },
  {
    path: "/reactpatterns/*",
    label: "React patterns",
    element: <ReactPatterns />,
    children: [
      { path: "higherorder", label: "Higher Order", element: <HigherOrder /> },
      { path: "higherorder2", label: "Higher Order 2", element: <HigherOrder2 /> },
      { path: "higherorder3", label: "Higher Order 3", element: <HigherOrder3 /> },
      {
        path: "higherorderAuthentication",
        label: "HOC Authentication",
        element: <HigherOrderAuthentication />,
      },
      { path: "hocPerson", label: "Person HOC", element: <Persons /> },
      { path: "hoc", label: "Product HOC", element: <ProductsListWithSearch /> },
      { path: "renderProps", label: "Render Props", element: <ParentComponent /> }
    ],
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
  { path: "/errorboundary", label: "Error Boundary", element: <ErrorApp /> },
  { path: "/learningSlider", label: "Learning Carousel", element: <LearningSlider /> },
  { path: "/imageSlider", label: "Image Carousel", element: <ImageSlider /> },
  { path: "/genericCarousel", label: "Generic Carousel", element: <GenericCarouselDemo /> },
];
