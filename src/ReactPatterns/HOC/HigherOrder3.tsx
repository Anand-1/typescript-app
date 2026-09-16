import React, { ComponentType, useState, useEffect } from "react";

type MousePosition = {
  x: number;
  y: number;
};

type WithMousePositionProps = {
  mousePosition: MousePosition;
};

// Higher Order Component (HOC) pattern: centralize mouse tracking and pass the
// current position into any wrapped display component.
const withMousePosition = <P extends object>(
  WrappedComponent: ComponentType<P & WithMousePositionProps>
) => {
  return function WithMousePosition(props: P) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      // Browser event subscription pattern: React state is updated from a document event.
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      // Add event listener to track mouse movement
      document.addEventListener("mousemove", updateMousePosition);

      // Cleanup pattern: remove global listeners to avoid duplicate handlers and leaks.
      return () => {
        document.removeEventListener("mousemove", updateMousePosition);
      };
    }, []); // Empty dependency array ensures useEffect runs only once (on mount)

    // Render the original component with the mouse position as props
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// Original functional component
const MouseTrackerComponent = (props: WithMousePositionProps) => {
  // The original component displays the current mouse position
  return (
    <div>
      <h2>Mouse Tracker Component</h2>
      <p>
        Mouse Position: {`(${props.mousePosition.x}, ${props.mousePosition.y})`}
      </p>
    </div>
  );
};

// Enhance the original component with the HOC
const MouseTrackerWithPosition = withMousePosition(MouseTrackerComponent);

// Usage of the enhanced component
const App = () => {
  return (
    <div>
      <MouseTrackerWithPosition />
    </div>
  );
};

export default App;
