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
    image: "https://raw.githubusercontent.com/shreyagoyal276/SPAM-PREDICTOR/main/ouput%20images/Spam.png",
    poster:"/img/spampredictorposterr.jpg",
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
    poster:"/img/billingmanagementproject.pdf",
    github: "https://github.com/shreyagoyal276/Billing-Management-System",
    tech: ["Python", "CSV"]
  },
  {
    title: "Environmental Parameters of Gwalior",
    timeline: "Apr 2025 - May 2025",
    org: "Madhav Institute of Technology and Science",
    bullets: [
      "Visualized 10 years of Gwalior's climate data",
      "Created an interactive dashboard to raise public awareness and support environmental decision-making"
    ],
    pdf: "/img/powerBIdashBoard.pdf",
    tech: ["Power BI", "CSV"]
  },
  {
    title: "Constellation Viewer using graphics.h",
    timeline: "May 2025",
    org: "Madhav Institute of Technology and Science",
    bullets: [
      "Visualized constellations Orion and Ursa Major using C++ and graphics.h",
      "Designed an interactive graphical representation of constellations"
    ],
    image: "/img/ursa_major.png", 
    exe:"/projects/constellations.exe",
    tech: ["C++", "graphics.h", "Computer Graphics"]
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
  {proj.github && (<a href={proj.github} target="_blank" rel="noopener noreferrer">🚀GitHub</a>)}
  {proj.pdf && (<a href={proj.pdf} target="_blank" rel="noopener noreferrer">🪐Dashboard PDF</a>)}
  {proj.poster && (<a href={proj.poster} target="_blank" rel="noopener noreferrer">🛰️Poster</a>)}
  {proj.image && (<a href={proj.image} target="_blank" rel="noopener noreferrer">🌌Sample Image</a>)}
  {proj.exe && (<a href={proj.exe} target="_blank" rel="noopener noreferrer">👨‍🚀EXE File</a>)}
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
