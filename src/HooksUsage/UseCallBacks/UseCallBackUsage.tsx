/* The react useCallback Hook returns a memoized callback
   function.
   -This allows us to isolate resource intensive functions so
   that they will not automatically run on each render.
   - They only run on dependency update.
   - no prop change no re-render 

  because of something called "referential equality".

  Every time a component re-renders, its functions get recreated

*/
import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallBackUsage = () => {
  console.log("Parent render");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>(["Old Todo"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  /* Condition when useCallback is not there, 
     child component will get reloaded on every parent render
  */
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <h1>UseCallback usage </h1>
      <h2>Parent Component</h2>
      <div>
        <span>Count: {count} </span>
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <h2>Child Component</h2>
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
};

export default UseCallBackUsage;
