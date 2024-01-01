import React, { memo } from "react";
import Child from "../Child/Child";

const Parent = ({ todos }: any) => {
  return (
    <>
      <h2>Parent Component</h2>
      {todos.map((todo: any, index: any) => {
        return <p key={index}>{todo}</p>;
      })}

      <hr />
      <Child todos={todos} />
    </>
  );
};
// if the props will not change, it will not reload
export default memo(Parent);
