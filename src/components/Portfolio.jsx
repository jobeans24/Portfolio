import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'TextEditor',
      description: 'PWA',
      link: "https://text-editor-z96w.onrender.com",
      repo: "https://github.com/jobeans24/Text_Editor"
    },
    {
      name: 'PasswordGenerator',
      description: 'JavaScript/HTML/CSS',
      link: "https://jobeans24.github.io/Password-Generater/",
      repo: "https://github.com/jobeans24/Password-Generater"
    },
    {
      name: 'runBuddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'ledWall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Payroll Tracker',
      description: 'JavaScript/HTML/CSS',
      link: "https://jobeans24.github.io/Payroll-Tracker/",
      repo: "https://github.com/jobeans24/Payroll-Tracker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
