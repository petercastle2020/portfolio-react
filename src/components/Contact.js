import React from "react";
import "./Contact.css";
import { ReactComponent as TwitterIcon } from "../icons/icons8-twitter.svg";
import { ReactComponent as LinkedInIcon } from "../icons/icons8-linkedin.svg";
import { ReactComponent as GitHubIcon } from "../icons/icons8-github.svg";
import { ReactComponent as EmailIcon } from "../icons/email-message.svg";

const Contact = ({ contactSectionText }) => {
  const { title } = contactSectionText;
  return (
    <div className="contact">
      <h2>{title}</h2>
      <div className="contact-table">
        <div className="email-container">
          <EmailIcon /> <p>vagnerpetel@gmail.com</p>
        </div>
        <hr className="dotted"></hr>
        <div className="social-media-container">
          <a
            href="https://twitter.com/peter_d_castle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media">
              <TwitterIcon />
              <p>Twitter</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/vagner-petel-9ba901238/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media">
              <LinkedInIcon />
              <p>LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/petercastle2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media">
              <GitHubIcon />
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
