import React, { useEffect, useState } from "react";
import  Idata from "./Idata";
function PromisesPage() {
  // Async status state pattern: separate data, error, and status flags for fetch UI.
  const [catUrl, setCatUrl] = useState("");
  const [error, setError] = useState(false);
  const [state, setState] = useState("");

  function fetchCat() {
    // Promise chain pattern: transition UI state before and after a network request.
    setState("loading");
    fetch("https://cataas.com/cat?json=true")
      .then((res) => {
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
    // Promise.all pattern: start several requests and wait until all finish or one fails.
    const requests = Idata.map((item) => fetch(`${item.url}`));

    Promise.all(requests)
      .then((responses) => {
        responses.forEach((response) => {
          console.log("User Data:", response);
           setState("success");
        });
      })
      .catch((error) => {console.error("A request failed:", error)
        setState("error");
        setError(error);
      });
  };

  useEffect(() => {
    // Mount effect pattern: fetch initial data once when the page opens.
    fetchCat();
  }, []);

  // Error branch pattern: bail out early when the async state failed.
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
