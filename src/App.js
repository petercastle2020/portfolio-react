import "./App.css";

import { projects } from "./projectsArray";

// components
import Project from "./components/Project";
import Landing from "./components/Landing";

console.log(projects);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Landing />
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
