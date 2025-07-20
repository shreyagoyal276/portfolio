import React from 'react';
import './style/Aboutme.css';
import Education from './Education';
import Experiene from './Experience';
import CompetitiveHeatmap from './CompetitiveHeatmap';

const hobbies = [
  "🌌 Stargazing",
  "📷 Photography",
  "🧪 Research & Exploration"
];

const gallery = [
  "/gallery/img1.png",
  "/gallery/img2.png"
];

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="bio-box">
        <p>
          I'm <span className="highlight">Shreya Goyal</span>, B.Tech CSE student at 
          <strong> MITS Gwalior</strong>. With an endless curiosity, I love exploring multiple tech fields including AI/ML,
          Space, Quantum Computing and more.
        </p>
        <p>
          I'm passionate about building practical projects and participating in hackathons to solve real-world problems.
          I balance my academic rigor with stargazing and photography, which reflect my creative side.
        </p>
      </div>

      <div className="education-in-about">
        <h3 className='education-heading'>EDUCATION</h3>
        <Education />
      </div>

      <div className="experience-in-about">
        <h3 className='education-heading'>EXPERIENCE</h3>
        <Experiene />
      </div>

      <div className="heatmap">
        <h3 className='education-heading'>CODING </h3>
        <CompetitiveHeatmap />
      </div>

      <h3 className="subheading">💫 Interests & Hobbies</h3>
      <ul className="hobby-list">
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>

      



      <div className="contact-section">
        <h3 className="subheading contact-sub">Contact</h3>
        <div className="social-links centered">
          <a href="mailto:shreyagoyal401@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
          </a>
          <a href="https://github.com/shreyagoyal276" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/shreyagoyal276" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <h3 className="subheading">My Gallery📸 </h3>
      <div className="gallery-grid">
        {gallery.map((img, i) => (
          <img key={i} src={img} alt={`gallery-${i}`} className="gallery-img" />
        ))}
      </div>
      <div className="photo-gallery-button">
        <a href="/photos" className="view-gallery-btn">📸 See All Photos</a>
      </div>
    </div>
  );
};

export default Aboutme;
