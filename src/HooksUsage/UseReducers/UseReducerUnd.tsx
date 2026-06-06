import React, { useReducer } from "react";
/* This is used for tracking multiple /custom state logic
   - it takes two arguments useReducer(<reducer>, <initialState>)
   - the reducer function contains your custom state logic and the 
      
*/
type Todo = {
  id: number;
  title?: string;
  complete?: boolean;
  react?: boolean;
  graphQL?: boolean;
  angular?: boolean;
};

type TodoAction =
  | { type: "REACT" }
  | { type: "GRAPHQL" }
  | { type: "ANGULAR" }
  | { type: "COMPLETE"; id: number };

const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
  { id: 3, react: false },
  { id: 4, graphQL: false },
  { id: 5, angular: false },
];

const reducer = (state: Todo[], action: TodoAction): Todo[] => {
  console.log(action);
  switch (action.type) {
    case "REACT":
      return state.map((todo) => ({ ...todo, react: true }));
    case "GRAPHQL":
      return state.map((todo) => ({ ...todo, graphQL: true }));
    case "ANGULAR":
      return state.map((todo) => ({ ...todo, angular: true }));
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return state;
  }
};

const UseReducerUnd = () => {
  // 1. reducer function
  // 2. initial state
  // Reducers are pure functions that take in a state and action and return a new state.
  // Given a set of inputs, it should always
  // return the same output. No surprises, side effects, API calls, mutations.
  const [todosInternal, dispatch] = useReducer(reducer, initialTodos);
  const handleComplete = (todo: Todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  const handleReactPress = () => {
    dispatch({ type: "REACT" });
  };
  const handleGraphQLPress = () => {
    dispatch({ type: "GRAPHQL" });
  };
  const handleAngularPress = () => {
    dispatch({ type: "ANGULAR" });
  };

  return (
    <>
      <div className="Outermost-component">
        <div className="innerone">
          <h3>-----------Usage of usereducer---------</h3>
        </div>
        <br />
        <div>
          {todosInternal.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={Boolean(todo.complete)}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="box">
        <h2>Use Reducer Example Component</h2>
        Learn React: {todosInternal.filter((data) => data.react).length}
        <div>
          <button
            type="button"
            onClick={handleReactPress}
            className="button is-grey"
          >
            React
          </button>
          <button
            type="button"
            onClick={handleGraphQLPress}
            className="button is-dark"
          >
            GraphQL
          </button>
          <button
            type="button"
            onClick={handleAngularPress}
            className="button is-grey"
          >
            Angular
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducerUnd;
