import React, { ComponentType, useState, useEffect } from "react";

// Higher Order Component (HOC) pattern: wrap any component and add loading behavior
// without changing the wrapped component's implementation.
const withLoadingSpinner = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return function WithLoadingSpinner(props: P) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Async side-effect pattern: simulate a loading phase when the wrapper mounts.
      const fetchData = async () => {
        // Assuming some async operation that takes time (e.g., fetching data from an API)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Data has been fetched, set loading to false
        setLoading(false);
      };

      // Invoke the fetchData function
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once (on mount)

    // Conditional rendering pattern: the wrapper decides whether to show fallback UI.
    if (loading) {
      return <div>Loading...</div>;
    }

    // If loading is false, render the original component
    return <WrappedComponent {...props} />;
  };
};

// Original functional component
type MyDataComponentProps = {
  data: string;
};

const MyDataComponent = (props: MyDataComponentProps) => {
  // The original component just displays some data
  return (
    <div>
      <h2>Data Component</h2>
      <p>Data: {props.data}</p>
    </div>
  );
};

// Enhance the original component with the HOC
const MyDataComponentWithLoading = withLoadingSpinner(MyDataComponent);

// Usage of the enhanced component
const App = () => {
  return (
    <div>
      <MyDataComponentWithLoading data="Some data from API" />
    </div>
  );
};

export default App;
