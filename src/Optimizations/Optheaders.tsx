import React from "react";

type Props = {
  toggleHeaders: () => void;
  headers: boolean;
};

const Optheaders: React.FC<Props> = ({ toggleHeaders, headers }) => {
  console.log("Rendering Optheaders");
  return (
    <div className="optimizations-page ">
      {headers && <h1 style={{ display: headers ? "block" : "none" }}>Optimizations</h1>}
      <p>
        This page will cover various optimization techniques in React, such as
        memoization, lazy loading, and code splitting.
      </p>
      <button onClick={toggleHeaders}>
        {headers ? "Hide Headers" : "Show Headers"}
      </button>
    </div>
  );
}
export default React.memo(Optheaders);