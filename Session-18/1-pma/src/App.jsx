import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reports from "./pages/Reports/Reports";
import ProjectReport from "./pages/ProjectReport/ProjectReport";
import Projects from "./pages/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/project/:id" element={<ProjectReport />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
