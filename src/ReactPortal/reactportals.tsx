import React, { useState } from "react";
import  MyModal  from "../Features/Portals";

const ReactPortals = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleclick = () => {
    setIsOpen((prev) => !prev);
  }
  
  return (
    <>
      <h1>React Portals</h1>
      <p>
        React Portals is a React component that allows you to create portals
      </p>
      <button type="button" onClick={() => handleclick()}>
        Show / Hide
      </button>
      <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </MyModal>
    </>
  );
};


export default ReactPortals;
