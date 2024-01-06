import React, { useState, memo } from "react";
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

  return (
    <>
      <MyGlobalContext.Provider value={{ copy, setCopy }}>
        {/* <MainNavigation /> */}
        <div className="Outermost-component">
          <div>
            <hr />
            <h1>Grand Parent Component</h1>
            <br />
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
