import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, idx) => {
        return (
          <li key={idx}>
            {expense.title} - ₹{expense.amount} ({expense.category})
            <button onClick={() => deleteExpense(idx)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default ExpenseList;
