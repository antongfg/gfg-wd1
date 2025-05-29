import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const totals = {};
  expenses.forEach(({ category, amount }) => {
    totals[category] = (Number(totals[category]) || 0) + Number(amount);
  });

  if (Object.keys(totals).length === 0) {
    return <p>No data to show in the chart.</p>;
  }

  const data = {
    labels: Object.keys(totals),
    datasets: [
      {
        data: Object.values(totals),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default ExpenseChart;
