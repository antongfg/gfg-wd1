import React from "react";
import { Link, useLocation } from "react-router";
import "./Results.css";

const Results = () => {
  const { state } = useLocation();

  return (
    <div className="result">
      <h2>Quiz Finished!</h2>
      <p>
        You scored {state.score} out of {state.total}
      </p>
      <Link to="/">Try Again</Link>
    </div>
  );
};

export default Results;
