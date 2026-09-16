import { useState, useEffect } from "react";

// Generic custom hook pattern: <T> lets callers describe the item shape returned by the API.
const useFetch = <T,>(url: string): [T[]] => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    // Effect dependency pattern: refetch when the url changes.
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return [data];
};

export default useFetch;
