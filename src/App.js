import "./App.css";

import { projects } from "./projectsArray";

// components
import Project from "./components/Project";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

console.log(projects);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="landing">
        <Landing />
      </section>

      {projects.map((project, index) =>
        index === 1 ? (
          <section id="projects" className="project-section-light">
            <Project key={index} project={project} />
          </section>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/200/svg"
              version="1.1"
              class="black-static-svg"
              // transform="rotate(180)"
            >
              <path
                d="
            M0 67,
            C 373, 283 
              1022, -140
              1920, 306
            V 600
            H 0
            V 67  
            Z"
              ></path>
            </svg>
            <section id="projects" className="project-section-dark">
              <Project key={index} project={project} />
            </section>
            <svg
              xmlns="http://www.w3.org/200/svg"
              version="1.1"
              class="black-static-svg"
              transform="rotate(180)"
            >
              <path
                d="
        M0 67,
        C 373, 283 
          1022, -140
          1920, 306
        V 600
        H 0
        V 67  
        Z"
              ></path>
            </svg>
          </>
        )
      )}

      <section id="skills" className="skills-section"></section>
      <svg
        xmlns="http://www.w3.org/200/svg"
        version="1.1"
        class="black-static-svg"
        // transform="rotate(180)"
      >
        <path
          d="
        M0 67,
        C 373, 283 
          1022, -140
          1920, 306
        V 600
        H 0
        V 67  
        Z"
        ></path>
      </svg>
      <section id="contact" className="contact-section"></section>
      <svg
        xmlns="http://www.w3.org/200/svg"
        version="1.1"
        class="black-static-svg"
        transform="rotate(180)"
      >
        <path
          d="
        M0 67,
        C 373, 283 
          1022, -140
          1920, 306
        V 600
        H 0
        V 67  
        Z"
        ></path>
      </svg>

      <section id="about" className="about-section"></section>
    </div>
  );
}

export default App;
