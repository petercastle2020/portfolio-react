import React from "react";
import "./About.css";

const About = ({ aboutSectionText }) => {
  const { title, firstP, secondP, thirdP, fourthP } = aboutSectionText;

  return (
    <div className="about">
      <h2>{title}</h2>
      <div className="about-text">
        <p>{firstP}</p>
        <p>{secondP}</p>
        <p>
          {thirdP}{" "}
          <a
            href="https://github.com/petercastle2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
        </p>
        <p>{fourthP}</p>
      </div>
    </div>
  );
};

export default About;
