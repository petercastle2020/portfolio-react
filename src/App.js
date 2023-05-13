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
import { LinkEn, LinkPt } from "./translationText";

console.log(projects);

function App() {
  const [language, setLanguage] = useState("usa");

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  // const linkText = {
  //   projects: language === "brazil" ? "Projetos" : "Projects",
  //   skills: language === "brazil" ? "Competências" : "Skills",
  //   contact: language === "brazil" ? "Contato" : "Contact",
  //   about: language === "brazil" ? "Sobre" : "About",
  // };

  const linkText = language === "usa" ? LinkEn : LinkPt;

  console.log(linkText);

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
            <Project project={project} />
          </section>
        ) : (
          <div key={project.title}>
            <TopSvg />
            <section id="projects" className="project-section-dark">
              <Project project={project} />
            </section>
            <BottomSvg />
          </div>
        )
      )}

      <section id="skills" className="skills-section">
        <SkillSection />
      </section>
      <TopSvg />
      <section id="about" className="about-section">
        <About />
      </section>
      <BottomSvg />
      <section id="contact" className="contact-section">
        <Contact />
      </section>
      <TopSvg />
    </div>
  );
}

export default App;
