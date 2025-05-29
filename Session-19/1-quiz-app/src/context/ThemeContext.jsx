import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark((curr) => !curr);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >
      <div className={dark ? "dark" : "light"}>{children}</div>
    </ThemeContext.Provider>
  );
};
