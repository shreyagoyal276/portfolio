import React from 'react';
import './style/Education.css';


const Education = () => {
  return (
    <div className="education-container">
      <div className="timeline-column">
      <div className="edu-block top-left">
          <div className="edu-grid">
            <div className="edu-left">
              <div className="degree-title">B.Tech, CSE</div>
              <div className="college-name">Madhav Institute of Technology and Science, Deemed University, Gwalior</div>
            </div>
            <div className="edu-right">
              <div className="edu-year">2024-28</div>
              <div className="highlight">CGPA: 9.01</div>
            </div>
          </div>
      </div>

      <div className="edu-block bottom-middle">
          <div className="edu-grid">
            <div className="edu-left">
              <div className="degree-title">Class XII (CBSE)</div>
              <div className="college-name">St. Paul’s School, Morar, Gwalior</div>
            </div>
            <div className="edu-right">
              <div className="edu-year">2023-24</div>
              <div className="highlight">94.4%</div>
            </div>
          </div>
      </div>


      <div className="edu-block bottom-left">
          <div className="edu-grid">
            <div className="edu-left">
              <div className="degree-title">Class X (CBSE)</div>
              <div className="college-name">St. Paul’s School, Morar, Gwalior</div>
            </div>
            <div className="edu-right">
              <div className="edu-year">2021-22</div>
              <div className="highlight">95%</div>
            </div>
          </div>
      </div>

        <div className="timeline">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>
      </div>
    </div>
  );
};

export default Education;
