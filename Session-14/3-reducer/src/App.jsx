import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const App = () => {
  const [count, setCount] = useState(1);
  const [state, dispatch] = useReducer(reducerFn, { count: 1 });

  const increment = () => {
    // setCount((crr) => crr + 1)
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    // setCount((crr) => crr - 1)
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
