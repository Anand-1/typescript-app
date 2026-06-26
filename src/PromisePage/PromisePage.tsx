import axios from "axios";
import React, { useEffect, useState } from "react";
import  Idata from "./Idata";
function PromisesPage() {
  const [catUrl, setCatUrl] = useState("");
  const [error, setError] = useState(false);
  const [state, setState] = useState("");

  function fetchCat() {
    setState("loading");
    axios
      .get("https://cataas.com/cat?json=true")
      .then((res) => {
        console.log(res.data.url);
        setState("success");
        setCatUrl("https://cataas.com/cat");
      })
      .catch((err) => {
        console.error("Error:", err);
        setState("error");
        setError(err);
      });
  }

  const fetchData = () => {
    setState("loading");
    // Map the array of IDs to an array of Axios promise requests
    const requests = Idata.map((item) => axios.get(`${item.url}`));

    Promise.all(requests)
      .then((responses) => {
        responses.forEach((response) => {
          console.log("User Data:", response.data);
           setState("success");
        });
      })
      .catch((error) => {console.error("A request failed:", error)
        setState("error");
        setError(error);
      });
  };

  useEffect(() => {
    fetchCat();
  }, []);

  if (state === "error") return <h1>{error.toString()}</h1>;

  return (
    <div>
      
      <button onClick={fetchCat}>New Cat?</button>
      <button onClick={fetchData}>Simulate Error</button>
      <div>
        {state === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          <img alt="cat" src={catUrl} />
        )}
      </div>
    </div>
  );
}

export default PromisesPage;
