import { useState } from "react";
import "./App.css";

import { projects } from "./projectsArray";

// components
import Project from "./components/Project";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import SkillSection from "./components/SkillsSection";
import TopSvg from "./components/TopSvg";
import BottomSvg from "./components/BottomSvg";
import About from "./components/About";
import Contact from "./components/Contact";

// Translations
import {
  LinkEn,
  LinkPt,
  aboutSectionEn,
  aboutSectionPt,
  contactSectionEn,
  contactSectionPt,
  skillsSectionEn,
  skillsSectionPt,
} from "./translationText";

function App() {
  const [language, setLanguage] = useState("usa");

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  const linkText = language === "usa" ? LinkEn : LinkPt;
  const aboutSectionText = language === "usa" ? aboutSectionEn : aboutSectionPt;
  const contactSectionText =
    language === "usa" ? contactSectionEn : contactSectionPt;
  const skillsSectionText =
    language === "usa" ? skillsSectionEn : skillsSectionPt;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          language={language}
          onLanguageChange={handleLanguageChange}
          linkText={linkText}
        />
      </header>
      <section className="landing">
        <Landing />
      </section>
      {projects.map((project, index) =>
        index === 1 ? (
          <section
            key={project.title}
            id="projects"
            className="project-section-light"
          >
            <Project project={project} language={language} />
          </section>
        ) : (
          <div key={project.title}>
            <TopSvg />
            <section id="projects" className="project-section-dark">
              <Project project={project} language={language} />
            </section>
            <BottomSvg />
          </div>
        )
      )}

      <section id="skills" className="skills-section">
        <SkillSection skillsSectionText={skillsSectionText} />
      </section>
      <TopSvg />
      <section id="about" className="about-section">
        <About aboutSectionText={aboutSectionText} />
      </section>
      <BottomSvg />
      <section id="contact" className="contact-section">
        <Contact contactSectionText={contactSectionText} />
      </section>
      <TopSvg />
    </div>
  );
}

export default App;
