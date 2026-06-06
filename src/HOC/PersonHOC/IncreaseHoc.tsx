import React, { ComponentType, useState } from "react";

export type IncreaseProps = {
  handleIncrease: () => void;
  money: number;
};

const IncreaseHoc = (OriginalComponent: ComponentType<IncreaseProps>) => {
  const NewComponent = () => {
    const [money, setMoney] = useState(1);
    const handleIncrease = () => {
      setMoney((currentMoney) => currentMoney * 2);
    };
    return <OriginalComponent handleIncrease={handleIncrease} money={money} />;
  };
  return NewComponent;
};

export default IncreaseHoc;
