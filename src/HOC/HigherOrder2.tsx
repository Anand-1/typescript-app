import React, { useState, useEffect } from "react";

// Higher Order Component (HOC)
const withLoadingSpinner = (WrappedComponent: any) => {
  return function WithLoadingSpinner(props: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an API call or asynchronous operation
      const fetchData = async () => {
        // Assuming some async operation that takes time (e.g., fetching data from an API)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Data has been fetched, set loading to false
        setLoading(false);
      };

      // Invoke the fetchData function
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once (on mount)

    // If loading is true, display a loading spinner
    if (loading) {
      return <div>Loading...</div>;
    }

    // If loading is false, render the original component
    return <WrappedComponent {...props} />;
  };
};

// Original functional component
const MyDataComponent = (props: any) => {
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
