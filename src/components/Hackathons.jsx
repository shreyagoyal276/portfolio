import React from 'react';
import './style/Hackathons.css';

const hackathons = [
  {
    name: "Bhartiya Antariksh Hackathon 2025",
    date: "July 2025",
    org: "Indian Space Research Organisation (ISRO)",
    role: "Team Lead",
    team: "Shining Stars",
    project: "High Resolution Lunar DEM Generation",
    description: "Built a complete pipeline using Python and image processing techniques to generate lunar DEM from mono images using photoclinometry.",
    tags: ["Python", "Photoclinometry", "Image Processing","Lunar Data"],
    platform: "Hack2Skill"
  },
  {
    name: "Hacksagon 2025",
    date: "April 2025 - June 2025",
    org: "IEEE student branch of ABV-IIITM Gwalior",
    role: "ML Developer & Backend Integrator",
    project: "StockSense: Smart Inventory Management",
    team: "Quantum Leap",
    description: "Built a news classification model using semi-supervised learning and trend analysis via Pytrends. Integrated ML model into MERN stack backend using Flask.",
    tags: ["Flask", "Pytrends", "Semi-Supervised Learning", "MERN Stack"],
    platform: "IIITM Gwalior",
    github: "https://github.com/shreyagoyal276/Quantum-Leap",
    certificate: "/certificates/hacksaogn2025.png"
  },
  {
    name: "Code Coalescence 2024",
    date: "Feb 2025",
    org: "MITS Gwalior",
    role: "Team Lead",
    team: "NextGen Navigators",
    project: "Smart Career Guidance Platform",
    description: "Led a team to develop a samrt career guidance platform, with features like quiz to get career suggestions, abroad study info, wrong-path solutions, career exploration tools and also a chatbot",
    tags: ["Career Exploration", "Quiz","Wrong path solution"],
    platform: "MITS Gwalior",
    certificate: "/certificates/code_coalescence2024.png"
  },
  {
    name: "HackOrbit 2025",
    date: "July 2025",
    org: "Digital Learning Group of MITS Gwalior",
    team: "Calm Coders",
    role: "Team Lead, ML developer & Ideation",
    project: "Mind Dump – Mental Clarity Platform",
    description: "A platform allowing users to express, explore, and empower thoughts freely. Designed for mental wellness with interactive and calming UI.",
    tags: ["Frontend", "Mental Health", "Team Project", "Creative UI", "3 Phase"],
    github: "https://github.com/shreyagoyal276/CalmCoders",
    project: "https://minddump-jbfh.onrender.com/",
    platform: "Unstop",
    certificate: "/certificates/hackorbit2025.png"
  },
  {
    name: "Kharagpur Data Science Hackathon 2025",
    date: "Jan 2025",
    org: "Indian Institute of Technology (IIT), Kharagpur",
    team: "HackHive",
    
    theme: "Data Science",
    description: "Qualified in the preliminary quiz round that assessed foundational knowledge of data science and neural networks.",
    tags: ["Python", "Neural Networks", "Data Science", "Quiz Round"],
    platform: "Unstop",
    certificate: "/certificates/iitkDSHackathon.png" 
  }
  
  
  
];


const Hackathons = () => {
  return (
    <div className="hackathon-container">
      {hackathons.map((hack, index) => (
        <div className="hackathon-card" key={index}>
          <div className="hackathon-header">
            <h3>{hack.name}</h3>
            <span id="date">{hack.date}</span>
          </div>

          <p className="hackathon-org">Organized by: {hack.org}</p>
          {hack.team && <p><strong>Team:</strong> {hack.team}</p>}
          {hack.role && <p><strong>Role:</strong> {hack.role}</p>}
          {hack.project && <p><strong>Project:</strong> {hack.project}</p>}
          {hack.theme && <p><strong>Theme:</strong> {hack.theme}</p>}
          <p className="hackathon-description">{hack.description}</p>

          <div className="hackathon-tags">
            {hack.tags.map((tag, i) => (
              <span className="tag-pill" key={i}>{tag}</span>
            ))}
          </div>

          <div className="hackathon-links">
            {hack.github && (
              <a href={hack.github} target="_blank" rel="noreferrer">🚀GitHub </a>
            )}
            {hack.project && (
              <a href={hack.project} target="_blank" rel="noreferrer">🛰️Project </a>
            )}
            {hack.certificate && (
              <a href={hack.certificate} target="_blank" rel="noreferrer">🌌Certificate</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hackathons;
