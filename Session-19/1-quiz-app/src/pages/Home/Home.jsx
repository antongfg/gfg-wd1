import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="container">
      <h1>React Interview Q&A Quiz</h1>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
};

export default Home;
