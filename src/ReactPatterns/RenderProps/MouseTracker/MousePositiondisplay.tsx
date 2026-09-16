import React from "react";
import { MousePosition } from "./MouseTacker";

type MousePositionDisplayProps = {
  position: MousePosition;
};

// Display component pattern: no state, only formats the data passed by MouseTracker.
const MousePositionDisplay = ({ position }: MousePositionDisplayProps) => {
  return (
    <>
      Mouse position: {position.x}, {position.y}
    </>
  );
};

export default MousePositionDisplay;
