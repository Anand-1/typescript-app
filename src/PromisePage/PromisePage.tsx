import axios from "axios";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchCat();
  }, []);

  if (state === "error") return <h1>{error.toString()}</h1>;

  return (
    <div>
      <div>
        {state === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          <img alt="cat" src="catUrl" />
        )}
      </div>
      <button>New Cat?</button>
    </div>
  );
}

export default PromisesPage;
