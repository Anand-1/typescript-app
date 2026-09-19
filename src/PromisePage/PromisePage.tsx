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
  if (state === "error") {
    return (
      <section className="example-page">
        <header className="example-header">
          <h1>Promise Fetch Example</h1>
          <p>Fetch requests failed and the route rendered its error branch.</p>
        </header>
        <div className="example-state">{error.toString()}</div>
      </section>
    );
  }

  return (
    <section className="example-page">
      <header className="example-header">
        <h1>Promise Fetch Example</h1>
        <p>
          This page demonstrates fetch promises, a loading state, an error
          branch, and Promise.all for grouped requests.
        </p>
        <div className="example-links">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank" rel="noreferrer">
            Open Promise.all Docs
          </a>
          <a href="https://cataas.com/cat?json=true" target="_blank" rel="noreferrer">
            Open Cat API
          </a>
        </div>
      </header>

      <section className="example-panel">
        <div className="example-toolbar">
          <h2>Cat Request</h2>
          <div>
            <button type="button" onClick={fetchCat}>New Cat</button>
            <button type="button" onClick={fetchData}>Run Promise.all</button>
          </div>
        </div>
        {state === "loading" ? (
          <div className="example-state">Loading...</div>
        ) : (
          <img alt="cat" src={catUrl} style={{ width: "min(100%, 520px)", borderRadius: 8 }} />
        )}
      </section>
    </section>
  );
}

export default PromisesPage;
