import React, { useState, useEffect } from "react";

// Higher Order Component (HOC)
const withMousePosition = (WrappedComponent: any) => {
  return function WithMousePosition(props: any) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      // Function to update mouse position
      const updateMousePosition = (e: any) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      // Add event listener to track mouse movement
      document.addEventListener("mousemove", updateMousePosition);

      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener("mousemove", updateMousePosition);
      };
    }, []); // Empty dependency array ensures useEffect runs only once (on mount)

    // Render the original component with the mouse position as props
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// Original functional component
const MouseTrackerComponent = (props: any) => {
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
