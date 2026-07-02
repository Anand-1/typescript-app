import React from "react";
import { MousePosition } from "./MouseTacker";

type MousePositionDisplayProps = {
  position: MousePosition;
};

const MousePositionDisplay = ({ position }: MousePositionDisplayProps) => {
  return (
    <>
      Mouse position: {position.x}, {position.y}
    </>
  );
};

export default MousePositionDisplay;
