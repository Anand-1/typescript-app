import useFetch from "./useFetch";
import "./CustomHooks.css";

type Todo = {
  id: number;
  title: string;
};

const CustomHooks = () => {
  const [data] = useFetch<Todo>("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>Custom Hooks Example</h1>
      {data &&
        data.map((item) => {
          return (
            <p className="pargraph-text" key={item.id}>
              {item.title}
            </p>
          );
        })}
    </>
  );
};

export default CustomHooks;
