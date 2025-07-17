import React from 'react';
import './style/Projects.css';

const projects = [
  {
    title: "Spam Predictor",
    timeline: "Feb 2025 – May 2025",
    org: "Madhav Institute of Technology and Science",
    bullets: [
      "Developed a spam detection website using Machine Learning and NLP",
      "Classifies SMS messages as Spam or Ham"
    ],
    github: "https://github.com/shreyagoyal276/SPAM-PREDICTOR",
    tech: ["Python", "Scikit-learn", "NLP", "Flask","HTML","CSS"]
  },
  {
    title: "Billing Management System",
    timeline: "Sep 2024 – Jan 2025",
    org: "Madhav Institute of Technology and Science",
    bullets: [
      "Built a Python-based CLI billing system",
      "Includes shopping cart, tax/discount logic, and admin sales tracking"
    ],
    github: "https://github.com/shreyagoyal276/Billing-Management-System",
    tech: ["Python", "CSV"]
  },
  {
    title: "Quiz Game",
    timeline: "Sep 2024 – Jan 2025",
    org: "St. Paul’s School, Gwalior",
    bullets: [
      "Created a customizable quiz game",
      "Users can pick categories and add questions dynamically"
    ],
    github: "https://github.com/shreyagoyal276/QUIZ_PYTHON",
    tech: ["Python", "CSV"]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((proj, index) => (
        <div className="project-card" key={index}>
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-timeline">{proj.timeline}</p>
          <p className="project-org">{proj.org}</p>

          <ul className="project-bullets">
            {proj.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="project-links">
          {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer">🔗GitHub</a>}
          </div>
          
          <div className="project-tech">
            {proj.tech.map((t, i) => (
              <span className="tech-pill" key={i}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
