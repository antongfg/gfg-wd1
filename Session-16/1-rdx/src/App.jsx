import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Username from "./pages/Username/Username";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<Username />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
