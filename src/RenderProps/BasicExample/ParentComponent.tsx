import React from "react";
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
  return (
    <>
      <h1>Parent Component</h1>
      <ChildComponent render={(data: any) => <p>Data from child: {data}</p>} />
    </>
  );
};

export default ParentComponent;
/*
In React, render props is a pattern where a component's logic is encapsulated
 in a function prop that the parent component passes to it. This allows the parent
component to control what should be rendered inside the child component.
The child component invokes the render prop as a function and passes its
 internal state or data to it. */
