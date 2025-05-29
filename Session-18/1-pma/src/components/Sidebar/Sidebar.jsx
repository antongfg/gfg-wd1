import React from "react";
import { Link } from "react-router";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Project Manager</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
