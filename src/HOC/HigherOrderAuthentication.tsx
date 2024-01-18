import React, { useState } from "react";
import { Link } from "react-router-dom";

// Higher Order Component (HOC)
const withAuthentication = (WrappedComponent: any) => {
  return function WithAuthentication(props: any) {
    const [authenticated, setAuthenticated] = useState(false);

    // Function to simulate a login (set authenticated to true)
    const login = () => {
      setAuthenticated(true);
    };

    // Function to simulate a logout (set authenticated to false)
    const logout = () => {
      setAuthenticated(false);
    };

    // If user is not authenticated, redirect to login page
    if (!authenticated) {
      return <Link to="/login" />;
    }

    // If user is authenticated, render the original component with additional props
    return (
      <WrappedComponent
        {...props}
        isAuthenticated={authenticated}
        onLogin={login}
        onLogout={logout}
      />
    );
  };
};

// Original functional component
const DashboardComponent = (props: any) => {
  console.log("sd");
  // The original component displays the dashboard content
  return (
    <div>
      <h2>Dashboard Component</h2>
      {props.isAuthenticated ? (
        <div>
          <p>Welcome to the Dashboard!</p>
          <button onClick={props.onLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};

// Enhance the original component with the HOC
const DashboardWithAuthentication = withAuthentication(DashboardComponent);

// Usage of the enhanced component
const App = () => {
  return (
    <div>
      <DashboardWithAuthentication />
    </div>
  );
};

export default App;
