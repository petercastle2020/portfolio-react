import React from "react";
import "./About.css";

const name = "Peter Castle";

const About = () => {
  return (
    <div className="about">
      <h2>About me</h2>
      <div className="about-text">
        <p>
          Hello! My name is {name} and I am a self-taught developer with a
          passion for learning and creating new things. While I may be new to
          the tech industry, I am eager to learn and gain hands-on experience.
        </p>
        <p>
          I have always had an interest in technology and coding, and have spent
          countless hours teaching myself how to code and build applications. I
          have worked on several personal projects to hone my skills, and I am
          always looking for new challenges to take on.
        </p>
        <p>
          My GitHub profile showcases some of my personal projects and
          highlights my skills in web development. You can check out my profile
          here:
          <a
            href="https://github.com/petercastle2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
          .
        </p>
        <p>
          If you'd like to get in touch, please feel free to reach out to me via
          email at <span>vagnerpetel@gmail.com</span> or at social media links
          in the contact section. I am always open to new opportunities and
          collaborations.
        </p>
      </div>
    </div>
  );
};

export default About;
