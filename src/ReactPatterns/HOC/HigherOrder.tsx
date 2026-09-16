import React, { ComponentType } from "react";

type TextProps = {
  text: string;
};

type UpperCaseProps = TextProps & {
  uppercasedText: string;
};

// Higher Order Component (HOC) pattern: accept a component and return a new
// component that injects additional props.
const withUpperCase = (WrappedComponent: ComponentType<UpperCaseProps>) => {
  // This component enhances the passed component by converting its text to uppercase
  return function WithUpperCase({ text }: TextProps) {
    // Enhance the props by adding a new prop called 'uppercasedText'
    const enhancedProps = {
      text,
      uppercasedText: text.toUpperCase(),
    };

    // Render the original component with the enhanced props
    return <WrappedComponent {...enhancedProps} />;
  };
};

// Original functional component
const MyComponent = (props: UpperCaseProps) => {
  console.log(props);
  // Presentational component pattern: this component only renders the props it receives.
  return (
    <div>
      <p>Original Text: {props.text}</p>
      <p>Uppercased Text: {props.uppercasedText}</p>
    </div>
  );
};

// Composition pattern: the enhanced component is created once and used like a normal component.
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
