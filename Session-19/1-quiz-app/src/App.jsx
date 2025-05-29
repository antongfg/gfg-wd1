import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
