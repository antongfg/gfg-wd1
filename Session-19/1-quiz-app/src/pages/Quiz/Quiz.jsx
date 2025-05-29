import React, { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import questions from "../../data/questions";
import "./Quiz.css";

const initialState = {
  current: 0,
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
        current: state.current + 1,
      };
    default:
      return state;
  }
};

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state.current, questions.length);
    if (state.current >= questions.length) {
      navigate("/results", {
        state: { score: state.score, total: questions.length },
      });
    }
  }, [state.current, state.score]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((curr) => {
        if (curr === 1) {
          dispatch({ type: "ANSWER", payload: { isCorrect: false } });
          return 15;
        }
        return curr - 1;
      });
    }, 1000);

    //cleanup process
    return () => clearInterval(timer);
  }, [state.current]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[state.current].correct;
    dispatch({ type: "ANSWER", payload: { isCorrect } });
    setTimer(15);
  };

  console.log(state.current);

  const question = questions[state.current];

  if (state.current >= questions.length) {
    return <h3>Please wait...</h3>;
  }

  return (
    <div className="quiz">
      <div className="timer">Time Left: {timer}</div>
      <QuestionCard
        question={question?.question}
        answers={question?.options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
