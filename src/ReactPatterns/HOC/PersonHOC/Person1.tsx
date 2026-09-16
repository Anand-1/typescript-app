import React from "react";
import IncreaseHoc, { IncreaseProps } from "./IncreaseHoc";

// Presentational component pattern: Person1 receives state and behavior from the HOC.
const Person1 = ({ handleIncrease, money }: IncreaseProps) => {
  return (
    <>
      <div>The Price is ${money}</div>
      <button onClick={handleIncrease} type="button">
        click to Increase
      </button>
    </>
  );
};

// Exporting the enhanced component means callers do not need to know about the wrapper.
export default IncreaseHoc(Person1);
