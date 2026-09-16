import React, { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

// Error boundary pattern: class components can catch render errors from their
// children and show fallback UI instead of unmounting the whole tree.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Static lifecycle pattern: update state during the error recovery path.
    return { hasError: true };
  }

  componentDidCatch() {
    // Reporting hook pattern: side effects such as logging belong in componentDidCatch.
    console.log("Error Occurred !");
  }

  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }

    return <>{this.props.children}</>;
  }
}

const FallbackUI = () => {
  // Fallback component pattern: keep recovery UI separate from error capture logic.
  return (
    <>
      <p>Loading.. Errror occured !</p>
    </>
  );
};
export default ErrorBoundary;
