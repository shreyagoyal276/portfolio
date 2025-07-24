import React from 'react';
import './style/Aboutme.css';
import Education from './Education';
import Experiene from './Experience';
import CompetitiveHeatmap from './CompetitiveHeatmap';

const hobbies = [
  "🌌 Stargazing",
  "📷 Photography",
  "🧪 Exploration"
];

const gallery = [
  "/gallery/img1.png",
  "/gallery/img2.png"
];

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className='wrapp'>
        <div className="bio-box">
          <p>
            I'm <span className="highlight">Shreya Goyal</span>, B.Tech CSE student at 
            <strong> MITS Gwalior</strong>. 
            I enjoy exploring various technology domains and have a strong inclination toward learning through hands-on projects. My interests lie in AI/ML, Quantum Computing, and space technologies
            </p>
          <p>
          I actively work on real-world projects and participate in hackathons. I regularly take part in coding competitions to strengthen my logic and problem-solving skills.
          I am looking forward to explore opportunities in AI/ML and work in emerging fields like Quantum Machine Learning.          
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

      <div className="heatmap">
        <h3 className='subheading'>CODING ACTIVITY</h3>
        <CompetitiveHeatmap />

        <div className="coding-profiles">
          <a href="https://leetcode.com/u/iJCTwS5SOZ/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" alt="LeetCode" />
          </a>
          <a href="https://www.codechef.com/users/shreyagoyal276/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg" alt="CodeChef" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/shreyago82f0/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG" />
          </a>
          <a href="https://codeforces.com/profile/shreyagoyal276" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@15.7.0/icons/codeforces.svg" alt="Codeforces" />
          </a>
        </div>
      </div>

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

      <h3 className="subheading">CAPTURES📸</h3>
      <div className="gallery-grid">
        {gallery.map((img) => (
          <img src={img} className="gallery-img" />
        ))}
      </div>
      <div className="photo-gallery-button">
        <a href="/photos" className="view-gallery-btn">See All Photographs</a>
      </div>
    </div>
  );
};

export default Aboutme;
