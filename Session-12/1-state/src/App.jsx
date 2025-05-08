import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(100);
  const [first, setFirst] = useState(1);
  let a = 1;

  let fruits = ["Apple", "mango", "Grapes"];

  function update() {
    setState((currState) => {
      return currState + 700;
    });
    // setState(700);
    // console.log(a);
  }

  useEffect(() => {
    console.log("Initial call from useeffect");
  }, [first, state]);

  console.log("Comp Rendered");

  return (
    <div>
      <h1>State: {state}</h1>
      <h1>First: {first}</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
      <button onClick={update}>Change</button>
      <button onClick={() => setFirst((crr) => crr + 1)}>Update</button>
    </div>
  );
};

export default App;
