import React from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  // const [input, setInput] = useState("");

  const inputRef = useRef();

  console.log("Getting rendered");

  const handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.click();
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        // onChange={(e) => setInput(e.target.value)}
      />
      <input type="file" ref={inputRef} />
      {/* <p>My name is {input}</p> */}
      <button onClick={handleClick}>Show Input</button>
    </div>
  );
};

export default App;
