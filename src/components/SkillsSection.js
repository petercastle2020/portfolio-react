import React from "react";
import "./SkillsSection.css";
// components
import Skills from "./Skills";

const skill = [
  "react",
  "node.js",
  "mongodb",
  "express.js",
  "github",
  "javascript",
  "css",
  "html",
];

const SkillSection = ({ skillsSectionText }) => {
  const { title } = skillsSectionText;
  return (
    <div className="skill-container">
      <h2>{title}</h2>
      <Skills skills={skill} />
    </div>
  );
};

export default SkillSection;
