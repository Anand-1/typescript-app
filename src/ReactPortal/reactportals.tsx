import React, { useState } from "react";
import  MyModal  from "../Features/Portals";

const ReactPortals = () => {
  // Toggle state pattern: parent controls whether the portal content is mounted.
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleclick = () => {
    setIsOpen((prev) => !prev);
  }
  
  return (
    <section className="example-page">
      <header className="example-header">
        <h1>React Portals Example</h1>
        <p>
          Render modal content outside the parent DOM hierarchy while keeping
          normal React state, props, and event handling.
        </p>
        <div className="example-links">
          <a href="https://react.dev/reference/react-dom/createPortal" target="_blank" rel="noreferrer">
            Open createPortal Docs
          </a>
        </div>
      </header>

      <section className="example-panel">
        <div className="example-toolbar">
          <h2>Modal Portal</h2>
          <button type="button" onClick={() => handleclick()}>
            {isOpen ? "Hide Modal" : "Show Modal"}
          </button>
        </div>
        <p className="example-muted">
          The button toggles React state in this route, but the modal is mounted
          into document.body through the reusable portal component.
        </p>
      </section>

      {/* Portal consumer pattern: modal content is authored here but rendered into document.body. */}
      <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </MyModal>
    </section>
  );
};


export default ReactPortals;
