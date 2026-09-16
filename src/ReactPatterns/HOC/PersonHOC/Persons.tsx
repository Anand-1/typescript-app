import React from "react";
import Person1 from "./Person1";
import Person2 from "./Person2";

// Composition demo: render two HOC-enhanced components side by side.
const Persons = () => {
  return (
    <>
      <div>Persons are</div>
      <Person1 />
      <Person2 />
    </>
  );
};

export default Persons;
