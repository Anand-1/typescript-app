import React from "react";
import IncreaseHoc, { IncreaseProps } from "./IncreaseHoc";

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

export default IncreaseHoc(Person2);
