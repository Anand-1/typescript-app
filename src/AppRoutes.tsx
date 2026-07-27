import { ReactElement } from "react";
import ReactQuery from "./ReactQuery/ReactQuery";
import ReactPortals from "./ReactPortal/reactportals";
import CancelAPI from "./CancelAPI/CancelAPI";
import PromisesPage from "./PromisePage/PromisePage";
import ReactObjservables from "./ReactObservables/ReactObservables";
import Landing from "./LazyLoading/Landing";
import ErrorApp from "./ReactPatterns/ErrorBoundary/MyComponent";
import ParentComponent from "./ReactPatterns/RenderProps/MouseTracker/ParentComponent";
import Optimizations from "./Optimizations/Onptimizations";
import LearningSlider from "./LearningSlider/LearningSlider";
import ImageSlider from "./ImageSlider/ImageSlider";
import GenericCarouselDemo from "./Components/GenericCarouselDemo";
import { Hooks } from "./HooksUsage/hooks";
import { ReactPatterns } from "./ReactPatterns/ReactPatterns";

type AppRoute = {
  path: string;
  label: string;
  element: ReactElement;
};


export const appRoutes: AppRoute[] = [
  { path: "/hooks/*", label: "Hooks Usages", element: <Hooks /> },
  { path: "/reactpatterns/*", label: "React patterns", element: <ReactPatterns /> },
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
  { path: "/renderProps", label: "Render Props", element: <ParentComponent /> },
  { path: "/optimizations", label: "Optimizations", element: <Optimizations /> },
  { path: "/learningSlider", label: "Learning Carousel", element: <LearningSlider /> },
  { path: "/imageSlider", label: "Image Carousel", element: <ImageSlider /> },
  { path: "/genericCarousel", label: "Generic Carousel", element: <GenericCarouselDemo /> },
];
