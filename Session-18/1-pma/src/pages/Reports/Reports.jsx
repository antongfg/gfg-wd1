import React from "react";
import { useSelector } from "react-redux";
import Report from "../../components/Report/Report";
import "./Reports.css";

const Reports = () => {
  const reports = useSelector((state) => state.projects.reports);

  return (
    <div className="reports-container">
      <h3 className="reports-title">Reports</h3>
      <div className="reports-list">
        {reports.map((report) => (
          <Report key={report.id} {...report} />
        ))}
      </div>
    </div>
  );
};

export default Reports;
