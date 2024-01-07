import ErrorBoundary from "./ErrorBoundary";

function MyComponent() {
  // Simulate an error for demonstration purposes
  if (Math.random() > 0.5) {
    throw new Error("An error occurred in MyComponent");
  }

  // Component logic here
  return <div>This is MyComponent</div>;
}

function ErrorApp() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default ErrorApp;
