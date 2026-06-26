/*
The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not
cause a re-render when updated.

It can be used to access a DOM element directly.
- useRef() only returns one item.
  It returns an Object called current.
- On useRef(0),it's like doing this: const count = {current: 0}.
  We can access the count by using count.current.
*/

import React from "react";
import { useState, useEffect, useRef } from "react";

const UserRefUsage = () => {
  const [inputValue, setInputValue] = useState("");

  // For tracking previous value
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h1>useRef Usage</h1>
      <div className="section-1 section-padding">
        <RederCalc />
      </div>
      <div className="section-2 section-padding">
        <FocusInput />
      </div>
      <div className="section-3 section-padding">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
    </>
  );
};

const RederCalc = () => {
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return <h2>Render Count: {count.current}</h2>;
};

const FocusInput = () => {
  // For accessing dom elements
  const inputElement =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      {/* {for accessing dom elements} */}
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};
export default UserRefUsage;
