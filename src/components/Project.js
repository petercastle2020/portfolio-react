import React from "react";
import "./Project.css";

// components
import Skills from "./Skills";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h2 className="project-title">{project.title}</h2>
      <div className="project-contents">
        <div className="project-img">
          <img src={project.image} alt="project-illustration" />
        </div>
        <div className="project-about">
          <p>{project.aboutText}</p>
        </div>
      </div>
      <Skills skills={project.skills} />
    </div>
  );
};

export default Project;
