import { memo } from "react";

type TodosProps = {
  todos: string[];
  addTodo: () => void;
};

const Todos = ({ todos, addTodo }: TodosProps) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

// React.memo pattern: skip child re-rendering when todos and addTodo keep the
// same references between parent renders.
export default memo(Todos);
