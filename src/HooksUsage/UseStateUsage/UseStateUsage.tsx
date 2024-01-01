// The React useState Hook allows us to track state in a function component.
import React, { useState } from "react";

const UseStateUsage = () => {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const [todo, setTodo] = useState(["Todo1", "Todo2"]);
  //If we only called setCar({color: "blue"}),
  // this would remove the brand, model, and year from our state.
  const updateColor = () => {
    setCar((prevState) => {
      return { ...prevState, precolor: "blue" };
    });
  };
  const handleTodos = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, "Todo3"];
    });
  };
  return (
    <>
      <h1>useState Usage</h1>
      <h2>Count : {count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Update my Car color
      </button>
      <button type="button" onClick={handleTodos}>
        Update Todos
      </button>
      <div>
        {todo.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
    </>
  );
};

export default UseStateUsage;
