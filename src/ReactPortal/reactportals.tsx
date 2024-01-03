import React from "react";
import ReactDOM from "react-dom";

const ReactPortals = () => {
  return (
    <>
      <h1>React Portals</h1>
      <p>
        React Portals is a React component that allows you to create portals
      </p>
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
