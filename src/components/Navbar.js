import React from "react";

import "./Navbar.css";

// Components
import LanguageSwitch from "./LanguageSwitch";

const Navbar = ({ language, onLanguageChange, linkText }) => {
  return (
    <div className="nav-bar">
      <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
      <div className="nav-bar-links">
        <a href="#projects">{linkText.projects}</a>
        <a href="#skills">{linkText.skills}</a>
        <a href="#contact">{linkText.contact}</a>
        <a href="#about">{linkText.about}</a>
      </div>
    </div>
  );
};

export default Navbar;
