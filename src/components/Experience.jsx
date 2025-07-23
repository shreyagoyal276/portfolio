import React from 'react';
import './style/Experience.css';

const experiences = [
  {
    role: "Content Writer",
    org: " Aerospace Club",
    time: "Oct 2024 - Present",
    description:
      "Prepared content for variours topics and events, and took part in events like Celestial Capture, Galactic Horizon - an interaction session with ISRO scientist. Also explored space and ML through the club’s Space Study Program (SSP) while connecting with like-minded peers.",
    type: "Volunteering",
  },
  {
    role: "Student Coordinator",
    org: "Competitive Programming",
    time: "Nov 2024 - Present",
    description:
      "Helped students get started with coding by making them register on platforms like Codeforces and LeetCode, shared updates about upcoming contests, and tried to build an active and encouraging coding environment for everyone.",
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
