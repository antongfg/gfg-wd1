import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <h1>Ventura</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
