import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<object[]>([]);
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
