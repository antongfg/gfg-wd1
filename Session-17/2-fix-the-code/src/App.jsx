import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./store/courseSlice";
import CoursesPage from "./pages/CoursesPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import "./index.css";

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/courses" replace />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/my-courses" element={<MyCoursesPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
