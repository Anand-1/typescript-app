import React, { useState } from "react";

const IncreaseHoc = (OriginalComponent: any) => {
  const NewComponent = () => {
    const [money, setMoney] = useState(1);
    const handleIncrease = () => {
      setMoney((money: any) => money * 2);
    };
    return <OriginalComponent handleIncrease={handleIncrease} money={money} />;
  };
  return NewComponent;
};

export default IncreaseHoc;
