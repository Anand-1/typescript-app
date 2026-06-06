import MouseTracker from "./MouseTacker";
import MousePositionDisplay from "./MousePositiondisplay";

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Use MouseTracker with render prop */}
      <MouseTracker
        render={(mousePosition) => (
          <MousePositionDisplay position={mousePosition} />
        )}
      />
    </div>
  );
};

export default ParentComponent;
