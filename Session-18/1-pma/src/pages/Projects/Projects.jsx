import React from "react";
import "./Projects.css";
import { useSelector } from "react-redux";
import Project from "../../components/Project/Project";

const Projects = () => {
  const projects = useSelector((state) => state.projects.list);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
