/*The useEffect Hook allows you to perform side effects
 in your components.

Some examples of side effects are: fetching data,
directly updating the DOM, and timers. 

useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)
*/
import React, { useEffect, useState } from "react";

const useEffectUsage = () => {
  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter((count) => count + 1);
    }, 1000);

    // this is for clearing data
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter]); // <- add the count variable here
  return (
    <>
      <h1>UseEffect Usage</h1>
      <h2>I've rendered {counter} times!</h2>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
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
