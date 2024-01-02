import useFetch from "./useFetch";
import "./CustomHooks.css";
const CustomHooks = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>Custom Hooks Example</h1>
      {data &&
        data.map((item: any) => {
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
