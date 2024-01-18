import React from "react";

// Higher Order Component (HOC)
const withUpperCase = (WrappedComponent: any) => {
  // This component enhances the passed component by converting its text to uppercase
  return function WithUpperCase(props: any) {
    // Enhance the props by adding a new prop called 'uppercasedText'
    const enhancedProps = {
      ...props,
      uppercasedText: props.text.toUpperCase(),
    };

    // Render the original component with the enhanced props
    return <WrappedComponent {...enhancedProps} />;
  };
};

// Original functional component
const MyComponent = (props: any) => {
  // The original component just displays the text passed as a prop
  return (
    <div>
      <p>Original Text: {props.text}</p>
      <p>Uppercased Text: {props.uppercasedText}</p>
    </div>
  );
};

// Enhance the original component with the HOC
const MyEnhancedComponent = withUpperCase(MyComponent);

// Usage of the enhanced component
const App = () => {
  return (
    <div>
      <MyEnhancedComponent text="Hello, World!" />
    </div>
  );
};

export default App;
