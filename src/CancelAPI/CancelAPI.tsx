import React, { useEffect, useState } from "react";

import axios from "axios";
const AnotherComponent = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    // More informations about the cancelation for the axios library here : https://github.com/axios/axios#cancellation

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setTimeout(() => {
      axios("https://pokeapi.co/api/v2/pokemon/12", {
        cancelToken: source.token,
      })
        .then((res) => setResult(res.data))
        .catch((err) => {
          // Handle error..
        });
    }, 3000);

    return () => source.cancel();
  }, []);

  return (
    <>
      <h1>Another Componentt</h1>
    </>
  );
};

const ApiCallComponent = ({ redirectToOtherComponent }: any) => {
  const [result, setResult] = useState([]);

  const controller = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/12")
        .then((res) => res.json())
        .then((data) => setResult(data))
        .catch((err) => {
          // Handle error ..
        });
    }, 5000);
    return () => controller.abort();
  }, [controller]);

  const redirect = () => {
    redirectToOtherComponent(true);
  };

  return <button onClick={redirect}> Let's call the APi </button>;
};
const CancelAPI = () => {
  const [apiCallDone, setApiCallDone] = useState(false);
  return (
    <>
      <h1>Cancel API Request</h1>
      <div className="ApiCallDone">
        {apiCallDone ? (
          <AnotherComponent />
        ) : (
          <ApiCallComponent redirectToOtherComponent={setApiCallDone} />
        )}
      </div>
    </>
  );
};

export default CancelAPI;
