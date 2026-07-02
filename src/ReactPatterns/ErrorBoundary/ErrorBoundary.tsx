import React, { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
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
  return (
    <>
      <p>Loading.. Errror occured !</p>
    </>
  );
};
export default ErrorBoundary;
