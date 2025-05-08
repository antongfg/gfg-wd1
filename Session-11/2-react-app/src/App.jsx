import React from "react";
import User from "./User";

const App = () => {
  return (
    <div>
      <h1 className="app__title">App</h1>
      <User name="Leny" age={35} />
    </div>
  );
};

export default App;
