import React, { useState, useEffect } from "react";
import { ReactComponent as BrazilFlagIcon } from "../icons/flag-brazil-svgrepo.svg";
import { ReactComponent as UsaFlagIcon } from "../icons/flag-us-svgrepo.svg";
import { ReactComponent as ArrowDownIcon } from "../icons/arrow-down-svgrepo.svg";
import LanguageTagButton from "./LanguageTagButton";

import "./Navbar.css";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("brazil");
  const [showLanguageSwitch, setShowLanguageSwitch] = useState(false);

  useEffect(() => {
    // Implement code to switch language here
  }, [selectedLanguage]);

  const handleLanguageTagClick = (language) => {
    setSelectedLanguage(language);
    setShowLanguageSwitch(false);
  };

  const toggleLanguageSwitch = () => {
    setShowLanguageSwitch(!showLanguageSwitch);
  };

  return (
    <div className="nav-bar">
      <div className="language-switch">
        <div className="language-switch-selected">
          <LanguageTagButton
            icon={
              selectedLanguage === "usa" ? <UsaFlagIcon /> : <BrazilFlagIcon />
            }
            selected={showLanguageSwitch}
            onClick={toggleLanguageSwitch}
          />
          <ArrowDownIcon
            className="arrow-down-icon"
            onClick={toggleLanguageSwitch}
          />
        </div>
        {showLanguageSwitch && (
          <div className="language-switch-dropdown">
            <LanguageTagButton
              icon={<UsaFlagIcon />}
              selected={selectedLanguage === "usa"}
              onClick={() => handleLanguageTagClick("usa")}
            />
            <LanguageTagButton
              icon={<BrazilFlagIcon />}
              selected={selectedLanguage === "brazil"}
              onClick={() => handleLanguageTagClick("brazil")}
            />
          </div>
        )}
      </div>
      <div className="nav-bar-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
