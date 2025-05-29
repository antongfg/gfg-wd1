import { useParams } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { getProjectWithReports } from "../../utils/project";
import Project from "../../components/Project/Project";
import Report from "../../components/Report/Report";
import "./ProjectReport.css";

const ProjectReport = () => {
  const { id } = useParams();

  const projects = useSelector((state) => state.projects.list);
  const reports = useSelector((state) => state.projects.reports);

  const overallData = useMemo(() => {
    return getProjectWithReports(id, projects, reports);
  }, [id, projects, reports]);

  return (
    <div className="project-report-container">
      <h2>Project Report</h2>
      <Project {...overallData.project} />

      <h3>Related Reports</h3>
      {overallData.relatedReports.length === 0 ? (
        <div className="no-reports">
          <p>No related reports found</p>
        </div>
      ) : (
        <div className="report-list">
          {overallData.relatedReports.map((report) => (
            <Report key={report.id} {...report} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectReport;
