import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ question, answers, onAnswer }) => {
  return (
    <div className="card">
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, idx) => {
          return (
            <li key={idx}>
              <button onClick={() => onAnswer(answer)}>{answer}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
