import React from "react";
import "./Report.css";

const Report = ({ title, description, date, type, author, status, tags }) => {
  return (
    <div className="report-card">
      <div className={`report-status ${status}`}>{status}</div>
      <h3 className="report-title">{title}</h3>
      <p className="report-description">{description}</p>
      <div className="report-meta">
        <div>
          <strong>Type:</strong> {type}
        </div>
        <div>
          <strong>Date:</strong> {date}
        </div>
        <div>
          <strong>Author:</strong> {author}
        </div>
      </div>
      <div className="report-tags">
        {tags.map((tag, index) => (
          <div key={index} className="report-tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
