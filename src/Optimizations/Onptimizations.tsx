import React, { useCallback } from "react";
import Optheaders from "./Optheaders";

const Optimizations = () => {
 const [count, setCount] = React.useState(0);
 const [showHeaders, setShowHeaders] = React.useState(true);
 const clickToShowHeaders = useCallback(() => {
   setShowHeaders(!showHeaders);
 }, [showHeaders]);
 const clickHandler = () => {
   setCount(count + 1);
 };
  return (
    <div className="optimizations-page ">
       <Optheaders toggleHeaders={clickToShowHeaders} headers={showHeaders} />
       <hr />
       <button onClick={clickHandler}>Click me</button>
       <p>You clicked {count} times</p>
    </div>
  );
};
export default Optimizations;