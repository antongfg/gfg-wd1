import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Verify from "./pages/Verify/Verify";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/verify/:token" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
