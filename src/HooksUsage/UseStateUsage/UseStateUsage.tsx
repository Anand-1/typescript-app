// The React useState Hook allows us to track state in a function component.
import { useState } from "react";
import "./../styles.css";

const UseStateUsage = () => {
  return (
    <>
      <div>
        <div className="content-box">
          <h1 className="heading-section">useState Usage</h1>
          <div className="section-1 section-padding">
            <Counter />
          </div>
          <div className="section-2 section-padding">
            <CarMagic />
          </div>
          <div className="section-3 section-padding">
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
};

const Counter = () => {

  console.log("------------------------------")
  console.log("Counter rendered");
  // Primitive state pattern: count is local UI state owned by this component.
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Count : {count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment 👆
      </button>
      <button
        type="button"
        onClick={() => (count <= 0 ? setCount(0) : setCount(count - 1))}
      >
        Decrement 👇
      </button>
    </>
  );
};

const CarMagic = () => {
  console.log("Car Magic rendered !");
  // Object state pattern: keep related car fields together in one state object.
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const updateColor = () => {
    // Immutable update pattern: spread the previous object and replace only the field that changed.
    setCar((prevState) => {
      return { ...prevState, color: "blue" };
    });
  };
  return (
    <>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Update my Car color
      </button>
    </>
  );
};

const Todos = () => {
  console.log("Todos re-rendered");
  // Array state pattern: React detects changes by receiving a new array reference.
  const [todo, setTodo] = useState(["Todo1", "Todo2"]);
  const handleTodos = () => {
    // Functional update pattern: use the previous state argument when the next
    // state depends on the current state.
    setTodo((prevTodos) => {
      return [...prevTodos, "Todo3"];
    });
  };
  return (
    <>
      {" "}

      <button type="button" onClick={handleTodos}>
        Update Todos
      </button>
      <div>
        {todo.map((todo, index) => {
          // List rendering pattern: every mapped item needs a key for React reconciliation.
          return <p key={index}>{todo}</p>;
        })}
      </div>
    </>
  );
};

export default UseStateUsage;
