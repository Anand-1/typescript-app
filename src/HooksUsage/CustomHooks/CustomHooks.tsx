import useFetch from "./useFetch";
const CustomHooks = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1>Custom Hooks Example</h1>
      {data &&
        data.map((item: any) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default CustomHooks;
