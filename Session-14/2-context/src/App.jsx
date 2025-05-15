import React from "react";
import { createContext } from "react";
import { useState } from "react";
import Container from "./Container";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>App Comp</h1>
      <Container />
    </ThemeContext.Provider>
  );
};

export default App;
