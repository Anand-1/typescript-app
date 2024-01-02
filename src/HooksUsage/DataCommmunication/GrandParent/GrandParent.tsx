import React, { useState, useEffect, useRef, memo } from "react";
import "./GrandParent.css";
// import MainNavigation from "../MainNavigation/MainNavigation";
import Parent from "../Parent/Parent";

import { MyGlobalContext } from "../ContextUsage";

const getCopy = (userType: string): string => {
  console.log(userType);
  if (userType.toLowerCase() === "admin") {
    return "Hello Admin User!";
  }
  return "Welcome user!";
};

const GrandParent = () => {
  console.log("Grand Parent rendered");

  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const [copy, setCopy] = useState<string>(getCopy("Admin"));

  // useRef usage
  const count = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      count.current = count.current + 1;
    }, 1000);
  }, []);

  // setTodos((prevTodos) => {
  //   return [prevTodos, "todo 3"];
  // });
  const inputElement =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <MyGlobalContext.Provider value={{ copy, setCopy }}>
        {/* <MainNavigation /> */}
        <div className="Outermost-component">
          <div>
            <hr />
            <h1>Grand Parent Component</h1>
            <br />
            <input type="text" ref={inputElement} />
            <h1 onClick={focusInput}>Render Count: {count.current}</h1>
            <div>Copy from Context Value : {copy}</div>
            <hr />
            <Parent todos={todos} />
          </div>
        </div>
      </MyGlobalContext.Provider>
    </>
  );
};

export default memo(GrandParent);