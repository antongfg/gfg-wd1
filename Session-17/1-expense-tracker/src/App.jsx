import React, { useEffect } from "react";
import { useState } from "react";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((curr) => [...curr, expense]);
  };

  const deleteExpense = (idx) => {
    setExpenses((curr) =>
      curr.filter((_, index) => {
        return idx !== index;
      })
    );
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
