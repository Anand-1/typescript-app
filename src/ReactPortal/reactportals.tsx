import React, { useState } from "react";
import ReactDOM from "react-dom";

const ReactPortals = () => {
  const [visibility, setVisibility] = useState<any>("hidden");
  const handleclick = () => {
    if (visibility === "hidden") {
      setVisibility("visible");
    } else {
      setVisibility("hidden");
    }
  };
  console.log(visibility);
  return (
    <>
      <h1>React Portals</h1>
      <p>
        React Portals is a React component that allows you to create portals
      </p>
      <button type="button" onClick={() => handleclick()}>
        Show / Hide
      </button>
      <MyModal />
    </>
  );
};

const MyModal = () => {
  return ReactDOM.createPortal(
    <div className="modal">
      <p>This is part of the modal</p>
    </div>,
    document.body
  );
};

export default ReactPortals;
