import React from 'react';
import './style/Experience.css';

const experiences = [
  {
    role: "Content Writer",
    org: " Aerospace Club",
    time: "Oct 2024 – Present",
    description:
      "Prepared content for event posters, and contributed to activities of the Aerospace Club.",
    type: "Volunteering",
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <p className="experience-org">{exp.org}</p>
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-time">{exp.time}</p>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
