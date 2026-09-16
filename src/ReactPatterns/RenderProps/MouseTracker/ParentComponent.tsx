import MouseTracker from "./MouseTacker";
import MousePositionDisplay from "./MousePositiondisplay";

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Render prop pattern: MouseTracker owns tracking; this parent chooses the display component. */}
      <MouseTracker
        render={(mousePosition) => (
          <MousePositionDisplay position={mousePosition} />
        )}
      />
    </div>
  );
};

export default ParentComponent;
