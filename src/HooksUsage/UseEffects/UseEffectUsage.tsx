/*The useEffect Hook allows you to perform side effects
 in your components.

Some examples of side effects are: fetching data,
directly updating the DOM, and timers. 

useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)
*/
import React, { useEffect, useState } from "react";

const useEffectUsage = () => {
  // useState owns render state; useEffect below coordinates side effects that
  // happen after rendering.
  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log("useEffect 1");
    // Timer side effect pattern: create the timer inside the effect.
    let timer = setTimeout(() => {
      setCounter((count) => count + 1);
    }, 1000);

    // Cleanup pattern: clear the timer if the component unmounts before it fires.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Derived state pattern: calculation is recomputed only when counter changes.
    setCalculation(counter * 2);
  }, [counter]);
  return (
    <>
      <div className="section-1 section-padding">
        <h1>UseEffect Usage</h1>
        <h2>I've rendered {counter} times!</h2>
        <button onClick={() => setCounter((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </div>
    </>
  );
};

export default useEffectUsage;
/*useEffect(
    () => {
      -Side effect logic goes here
      -This function will be executed after the component is mounted
      -and whenever the component is updated or re-rendered.
      return () => {
        // Cleanup logic goes while unmounting
      };
    },
    [
       Dependency array 
    ]
   );
    1. useEffect(() => {
       //Runs on every render , it has no dependency array
       });
    2. useEffect(() => {
       //Runs only on the first render
       }, []);
    3. useEffect(() => {
       //Runs only on the first render + dependency change
       }, [Dependency]);
   */
