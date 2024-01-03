// https://www.freecodecamp.org/news/beginners-guide-to-rxjs-redux-observables/

/*
Observers are objects that can subscribe to Observables and Subjects
 */
import React from "react";
import "./style.css";
import FirstPerson from "./FirstPerson";
import SecondPerson from "./SecondPerson";

const ReactObjservables = () => {
  return (
    <>
      <div>
        <h1>React Observables</h1>
        <div className="chat-container">
          <FirstPerson />
          <SecondPerson />
        </div>
      </div>
    </>
  );
};

export default ReactObjservables;
