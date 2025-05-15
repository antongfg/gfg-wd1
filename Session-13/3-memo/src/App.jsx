import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default App;

function slowFunction(num) {
  console.log("running slow");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
