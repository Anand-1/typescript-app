import React, { useState } from "react";
const MouseTracker = ({ render }: any) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: any) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      <div
        style={{ height: "300px", border: "1px solid #ccc" }}
        onMouseMove={handleMouseMove}
      >
        {/* Render the child component with the mouse position */}
        {render(position)}
      </div>
    </>
  );
};
export default MouseTracker;
