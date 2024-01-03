import React from "react";
import "./App.css";
import GrandParent from "./HooksUsage/DataCommmunication/GrandParent/GrandParent";
import UseStateUsage from "./HooksUsage/UseStateUsage/UseStateUsage";
import UseEffectUsage from "./HooksUsage/UseEffects/UseEffectUsage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserRefUsage from "./HooksUsage/UseRefs/UseRefUsage";
import UseCallBackUsage from "./HooksUsage/UseCallBacks/UseCallBackUsage";
import UseMemoUsage from "./HooksUsage/UseMemos/UseMemoUsage";
import CustomHooks from "./HooksUsage/CustomHooks/CustomHooks";
import InfinitScroll from "./InfiniteScroll/InfiniteScroll";
import UseReducerUnd from "./HooksUsage/UseReducers/UseReducerUnd";
import HigherOrderComponent from "./HOC/HigherOrderComponent";
import ReactQuery from "./ReactQuery/ReactQuery";
import ReactPortals from "./ReactPortal/reactportals";
import CancelAPI from "./CancelAPI/CancelAPI";
import PromisesPage from "./PromisePage/PromisePage";
import ReactObjservables from "./ReactObservables/ReactObservables";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseStateUsage />} />
          <Route path="/grandparent" element={<GrandParent />} />
          <Route path="/useStates" element={<UseStateUsage />} />
          <Route path="/useEffects" element={<UseEffectUsage />} />
          <Route path="/useRefs" element={<UserRefUsage />} />
          <Route path="/useCallbacks" element={<UseCallBackUsage />} />
          <Route path="/useMemos" element={<UseMemoUsage />} />
          <Route path="/useCustoms" element={<CustomHooks />} />
          <Route path="/usereducers" element={<UseReducerUnd />} />
          <Route path="/hoc" element={<HigherOrderComponent />}></Route>
          <Route path="/infiniteScroll" element={<InfinitScroll />} />
          <Route path="/reactQuery" element={<ReactQuery />} />
          <Route path="/reactportals" element={<ReactPortals />} />
          <Route path="/cancelAPI" element={<CancelAPI />} />
          <Route path="/promisepage" element={<PromisesPage />} />
          <Route path="/reactobservables" element={<ReactObjservables />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
