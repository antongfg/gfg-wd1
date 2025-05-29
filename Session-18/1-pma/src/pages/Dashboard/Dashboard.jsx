import React from "react";
import { useSelector } from "react-redux";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const projects = useSelector((state) => state.projects.list);
  const reports = useSelector((state) => state.projects.reports);

  const statusCounts = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});

  const priorityCounts = projects.reduce((acc, project) => {
    acc[project.priority] = (acc[project.priority] || 0) + 1;
    return acc;
  }, {});

  const statusData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Project Status",
        data: Object.values(statusCounts),
        backgroundColor: ["#60a5fa", "#fbbf24", "#34d399"],
        borderWidth: 1,
      },
    ],
  };

  const priorityData = {
    labels: Object.keys(priorityCounts),
    datasets: [
      {
        label: "Project Priority",
        data: Object.values(priorityCounts),
        backgroundColor: ["#ef4444", "#facc15", "#10b981"],
      },
    ],
  };

  const recentReports = reports.slice(0, 5);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Project Dashboard</h1>

      <div className="charts-section">
        <div className="chart-card">
          <h2>Project Status Distribution</h2>
          <Pie data={statusData} />
        </div>

        <div className="chart-card">
          <h2>Project Priority Overview</h2>
          <Bar data={priorityData} />
        </div>
      </div>

      <div className="reports-section">
        <h2>Recent Reports</h2>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Date</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((report) => (
              <tr key={report.id}>
                <td data-label="title">{report.title}</td>
                <td data-label="type">{report.type}</td>
                <td data-label="date">{report.date}</td>
                <td data-label="author">{report.author}</td>
                <td data-label="status">{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
