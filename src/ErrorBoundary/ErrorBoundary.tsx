import React, { useEffect, useState } from "react";

const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.log("Error Occurred !");
    }
  }, [hasError]);

  if (hasError) {
    return <FallbackUI />;
  }
  return (
    <>
      <div>Normal Hai</div>
    </>
  );
};

const FallbackUI = () => {
  return (
    <>
      <p>Loading.. Errror occured !</p>
    </>
  );
};
export default ErrorBoundary;
