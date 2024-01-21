import React from "react";

const MousePositionDisplay = ({ position }: any) => {
  return (
    <>
      Mouse position: {position.x}, {position.y}
    </>
  );
};

export default MousePositionDisplay;
