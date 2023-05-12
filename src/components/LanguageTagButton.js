import React from "react";
import "./LanguageTagButton.css";

const LanguageTagButton = ({ icon, selected, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        id="languageBtn"
        className={selected ? "selected" : ""}
      >
        {icon}
      </button>
    </div>
  );
};

export default LanguageTagButton;
