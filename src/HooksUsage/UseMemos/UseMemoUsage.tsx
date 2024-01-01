import React, { useMemo, useState } from "react";

const UseMemoUsage = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>(["Old Todo"]);

  // const calcualtion = expensiveCalc(count);
  // On change of count , calculation will not happen
  const calculation: any = useMemo(() => {
    expensiveCalc(count);
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addtodos = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
    <>
      <h1>UseMemo usage </h1>
      <h2>My Todos</h2>
      {todos &&
        todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      <button onClick={addtodos}>Add todo Item</button>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <span>{calculation}</span>
      </div>
    </>
  );
};
const expensiveCalc = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoUsage;
