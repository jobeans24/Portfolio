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
      name: 'SocialClub',
      description: 'Backend/Express/Node.js/Insomnia/NoSQL/MongoDB',
      link: "the videos of the deployed backend are within the README.md file",
      repo: "https://github.com/jobeans24/SocialClub"
    },
    {
      name: 'PayrollTracker',
      description: 'JavaScript/HTML/CSS',
      link: "https://jobeans24.github.io/Payroll-Tracker/",
      repo: "https://github.com/jobeans24/Payroll-Tracker"
    },
    {
      name: 'PersonalBlog',
      description: 'Web APIs/HTML/CSS/JavaScript',
      link: "https://jobeans24.github.io/Personal-Blog/",
      repo: "https://github.com/jobeans24/Personal-Blog"
    }
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
