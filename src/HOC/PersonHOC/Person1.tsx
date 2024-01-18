import React from "react";
import IncreaseHoc from "./IncreaseHoc";

const Person1 = ({ handleIncrease, money }: any) => {
  return (
    <>
      <div>The Price is ${money}</div>
      <button onClick={handleIncrease} type="button">
        click to Increase
      </button>
    </>
  );
};

export default IncreaseHoc(Person1);
