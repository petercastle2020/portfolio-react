import React from "react";
import "./Project.css";

// components
import Skills from "./Skills";
import Links from "./Links";

const Project = ({ project, language }) => {
  const { title, image, aboutText, gitHubLink, liveDemoLink, skills } = project;
  const aboutTextLanguage = language === "usa" ? aboutText.en : aboutText.pt;

  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <div className="project-contents">
        <div className="project-img">
          <img src={image} alt="project-illustration" />
        </div>
        <div className="project-about">
          <p>{aboutTextLanguage}</p>
        </div>
      </div>
      <div className="skills-link-div">
        <Skills skills={skills} />
        <Links
          language={language}
          gitHubLink={gitHubLink}
          liveDemoLink={liveDemoLink}
        />
      </div>
    </div>
  );
};

export default Project;
