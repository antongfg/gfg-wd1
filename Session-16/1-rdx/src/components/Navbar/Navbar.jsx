import { Link } from "react-router";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>User Management System</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
