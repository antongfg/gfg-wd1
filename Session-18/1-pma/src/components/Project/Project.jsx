import React from "react";
import "./Project.css";
import { Link } from "react-router";

const Project = ({
  id,
  name,
  description,
  priority, //High, Medium, Low
  startDate,
  endDate,
  teamMembers,
  status, //Completed, Planned, In Progress
}) => {
  const customCls = status === "In Progress" ? "In_Progress" : status;

  return (
    <Link to={`/project/${id}`}>
      <div className="project-card">
        <div className={`status-badge ${customCls}`}>{status}</div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="project-dates">
          {startDate} - {endDate}
        </p>
        <div>
          {teamMembers.map((member, index) => (
            <div key={index} className="project-team">
              <div>{member.slice(0, 1)}</div>
              <p>{member}</p>
            </div>
          ))}
        </div>
        <div className={`priority ${priority}`}>{priority}</div>
      </div>
    </Link>
  );
};

export default Project;
