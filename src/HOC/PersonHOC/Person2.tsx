import React from "react";
import IncreaseHoc from "./IncreaseHoc";

const Person2 = ({ handleIncrease, money }: any) => {
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
