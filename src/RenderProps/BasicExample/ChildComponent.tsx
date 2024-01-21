import { useEffect, useState } from "react";

const ChildComponent = ({ render }: any) => {
  const [internalData, setInternalData] = useState("Hello from child!");
  useEffect(() => {
    setInternalData("Data from UseEffect !");
  }, []);
  // Invoking the render prop and passing internal data
  return render(internalData);
};

export default ChildComponent;
