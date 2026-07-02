import { useState, useEffect } from "react";

const useFetch = <T,>(url: string): [T[]] => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return [data];
};

export default useFetch;
