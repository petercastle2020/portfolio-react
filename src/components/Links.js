import React from "react";
import "./Links.css";

// translation
import { linkComponentEn, linkComponentPt } from "../translationText";

const Links = ({ language, gitHubLink, liveDemoLink }) => {
  const linkText = language === "usa" ? linkComponentEn : linkComponentPt;
  return (
    <div className="project-links">
      {liveDemoLink ? (
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          {linkText.liveDemo}
        </a>
      ) : (
        <a
          href={liveDemoLink}
          disabled={!liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="disabled-link"
        >
          Live Demo (Not Available)
        </a>
      )}
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
        {linkText.sourceCode}
      </a>
    </div>
  );
};

export default Links;
