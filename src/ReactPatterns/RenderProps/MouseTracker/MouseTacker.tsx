import React, { useState } from "react";

export type MousePosition = {
  x: number;
  y: number;
};

type MouseTrackerProps = {
  render: (position: MousePosition) => React.ReactNode;
};

// Render props pattern: reusable stateful behavior is exposed through a function prop.
const MouseTracker = ({ render }: MouseTrackerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <>
      <div
        style={{ height: "300px", border: "1px solid #ccc" }}
        onMouseMove={handleMouseMove}
      >
        {/* Inversion of control: the caller decides how the mouse position should be rendered. */}
        {render(position)}
      </div>
    </>
  );
};
export default MouseTracker;
