// https://dev.to/edemagbenyo/handle-errors-in-react-components-like-a-pro-l7l
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
    <section className="example-page">
      <header className="example-header">
        <h1>Error Boundary Example</h1>
        <p>
          Refresh or revisit this route to randomly trigger a render error and
          see the class-based error boundary render fallback UI.
        </p>
        <div className="example-links">
          <a href="https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" target="_blank" rel="noreferrer">
            Open Error Boundary Docs
          </a>
        </div>
      </header>

      <section className="example-panel">
        <h2>Protected Component</h2>
        {/* Boundary wrapper pattern: only descendants inside ErrorBoundary are protected. */}
        <ErrorBoundary>
          <MyComponent />
        </ErrorBoundary>
      </section>
    </section>
  );
}

export default ErrorApp;
