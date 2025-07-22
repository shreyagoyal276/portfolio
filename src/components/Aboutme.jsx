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
    <div className='aboutme-cont'>
    <div className="aboutme-container">
      <div className='wrapp'>
        <div className="bio-box">
          <p>
            I'm <span className="highlight">Shreya Goyal</span>, B.Tech CSE student at 
            <strong> MITS Gwalior</strong>. 
            I enjoy exploring different tech domains and love learning through hands-on projects. My interests lie in AI/ML, Quantum Computing, and space technologies, and I’m especially curious about the intersection of Quantum and Machine Learning.
          </p>
          <p>
            I like building real-world projects, participating in hackathons, and solving problems that have meaningful impact. I’ve worked with Python, C/C++, and some web technologies, and I also enjoy coding competitions to sharpen my logic and problem-solving skills.
            In the future, I look forward to exploring research-based opportunities and working in emerging fields like Quantum Machine Learning.          
          </p>
        </div>

        <div className='img-box'>
          <img src={'/img/profile.jpg'} alt={"Shreya Goyal"} className="profile-img" />
        </div>

      </div>

      <div className="education-in-about">
        <h3 className='subheading'>EDUCATION</h3>
        <Education />
      </div>

      <div className="experience-in-about">
        <h3 className='subheading'>EXPERIENCE</h3>
        <Experiene />
      </div>

      {/* <div className="heatmap">
        <h3 className='subheading'>CODING </h3>
        <CompetitiveHeatmap />
      </div> */}

      <h3 className="subheading">HOBBIES</h3>
      <ul className="hobby-list">
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>

      <div className="contact-section">
        <h3 className="subheading">CONTACT</h3>
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

      <h3 className="subheading">CAPTURES📸 </h3>
      <div className="gallery-grid">
        {gallery.map((img, i) => (
          <img key={i} src={img} alt={`gallery-${i}`} className="gallery-img" />
        ))}
      </div>
      <div className="photo-gallery-button">
        <a href="/photos" className="view-gallery-btn">📸 See All Photos</a>
      </div>
    </div>
    </div>
  );
};

export default Aboutme;
