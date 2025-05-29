import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1>React Quiz</h1>
      <button onClick={toggleTheme}>
        Switch to {dark ? "Light" : "Dark"} mode
      </button>
    </nav>
  );
};

export default Navbar;
