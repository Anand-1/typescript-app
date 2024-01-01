import React, { memo } from "react";
import { useGlobalContext } from "../ContextUsage";
const Child = ({ todos }: any) => {
  const { copy, setCopy } = useGlobalContext();
  return (
    <>
      <h2>Child Component</h2>
      <p>Copy Value : {copy}</p>
      {todos.map((todo: any, index: any) => {
        return <p key={index}>{todo}</p>;
      })}

      {/* part of useContext usage */}
      <button onClick={() => setCopy("This is a new copy")}>Click me!</button>
    </>
  );
};

// if the props will not change, it will not reload
export default memo(Child);
