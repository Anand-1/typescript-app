// https://www.freecodecamp.org/news/beginners-guide-to-rxjs-redux-observables/
//https://blog.logrocket.com/rxjs-react-hooks-for-state-management/

/*
Observers are objects that can subscribe to Observables and Subjects
 */
import React from "react";
import "./style.css";
import FirstPerson from "./FirstPerson";
import SecondPerson from "./SecondPerson";

const ReactObjservables = () => {
  // Shared observable demo: both chat panes subscribe to the same external store.
  return (
    <section className="example-page">
      <header className="example-header">
        <h1>React Observables Example</h1>
        <p>
          Two React components subscribe to the same RxJS Subject-backed store
          and update when messages are published.
        </p>
        <div className="example-links">
          <a href="https://rxjs.dev/guide/subject" target="_blank" rel="noreferrer">
            Open RxJS Subject Docs
          </a>
        </div>
      </header>

      <div className="example-panel">
        <div className="example-toolbar">
          <h2>Shared Chat Store</h2>
        </div>
        <div className="chat-container">
          <FirstPerson />
          <SecondPerson />
        </div>
      </div>
    </section>
  );
};

export default ReactObjservables;
