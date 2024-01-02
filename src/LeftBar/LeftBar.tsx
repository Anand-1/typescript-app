import React from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <>
      <div className="leftBar">
        <div>
          <Link to="useEffects"> Use Effect</Link>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
