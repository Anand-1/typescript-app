import React from "react";
import IncreaseHoc, { IncreaseProps } from "./IncreaseHoc";

// Presentational component pattern: Person2 reuses the same injected HOC props as Person1.
const Person2 = ({ handleIncrease, money }: IncreaseProps) => {
  return (
    <>
      <div>The Price is ${money}</div>
      <button onClick={handleIncrease} type="button">
        Increase by 2
      </button>
    </>
  );
};

// HOC composition pattern: Person2 gets its own independent wrapped state instance.
export default IncreaseHoc(Person2);
