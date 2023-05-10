import React from "react";
import "./Project.css";

// components
import Skills from "./Skills";
import Links from "./Links";

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
      <div className="skills-link-div">
        <Skills skills={project.skills} />
        <Links />
      </div>
    </div>
  );
};

export default Project;
