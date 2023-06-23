import React, { useState, useEffect } from "react";
import "./LanguageSwitch.css";
// Icons
import { ReactComponent as BrazilFlagIcon } from "../icons/flag-brazil-svgrepo.svg";
import { ReactComponent as UsaFlagIcon } from "../icons/flag-us-svgrepo.svg";
import { ReactComponent as ArrowDownIcon } from "../icons/arrow-down-svgrepo.svg";
// components
import LanguageTagButton from "./LanguageTagButton";

const LanguageSwitch = ({ language, onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [showLanguageSwitch, setShowLanguageSwitch] = useState(false);

  useEffect(() => {
    const userLanguage = navigator.language.toLowerCase();
    if (userLanguage.toLowerCase() === "pt-br") {
      setSelectedLanguage(userLanguage);
    }
  }, [setSelectedLanguage]);

  const handleLanguageTagClick = (language) => {
    setSelectedLanguage(language);
    onLanguageChange(language);
    setShowLanguageSwitch(false);
  };

  const toggleLanguageSwitch = () => {
    setShowLanguageSwitch(!showLanguageSwitch);
  };
  return (
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
          {selectedLanguage !== "usa" && (
            <LanguageTagButton
              icon={<UsaFlagIcon />}
              selected={selectedLanguage === "usa"}
              onClick={() => handleLanguageTagClick("usa")}
            />
          )}
          {selectedLanguage !== "brazil" && (
            <LanguageTagButton
              icon={<BrazilFlagIcon />}
              selected={selectedLanguage === "brazil"}
              onClick={() => handleLanguageTagClick("brazil")}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
