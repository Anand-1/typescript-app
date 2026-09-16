import { ReactElement, useEffect, useState } from "react";

type ChildComponentProps = {
  render: (data: string) => ReactElement;
};

// Render prop component: owns internal data but delegates the final markup to its parent.
const ChildComponent = ({ render }: ChildComponentProps) => {
  const [internalData, setInternalData] = useState("Hello from child!");
  useEffect(() => {
    setInternalData("Data from UseEffect !");
  }, []);
  // Invoking the render prop and passing internal data
  return render(internalData);
};

export default ChildComponent;
