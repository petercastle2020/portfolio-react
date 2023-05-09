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

      <section id="projects" className="project-section">
        <svg
          xmlns="http://www.w3.org/200/svg"
          version="1.1"
          class="static-svg"
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
        <svg
          xmlns="http://www.w3.org/200/svg"
          version="1.1"
          class="static-svg"
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

        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
      <section id="contact">
        <svg
          xmlns="http://www.w3.org/200/svg"
          version="1.1"
          class="static-svg"
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
        <svg
          xmlns="http://www.w3.org/200/svg"
          version="1.1"
          class="static-svg"
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
      </section>
      <section id="about">
        <svg
          xmlns="http://www.w3.org/200/svg"
          version="1.1"
          class="static-svg"
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
        <svg
          xmlns="http://www.w3.org/200/svg"
          version="1.1"
          class="static-svg"
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
      </section>
    </div>
  );
}

export default App;
