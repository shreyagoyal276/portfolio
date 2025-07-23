import React, { useState, useRef, useEffect } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';
import Aboutme from './components/Aboutme';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photos from './components/Photos';


import MysteryStar from './components/MysteryStar';

const sectionComponents = {
  SKILLS: <Skills />,
  PROJECTS: <Projects />,
  HACKATHONS: <Hackathons />,
  CERTIFICATES: <Certificates />,
  'ABOUT ME': <Aboutme />
  
};

function MainApp() {
  const [title, setTitle] = useState('ABOUT ME');
  const [activeSection, setActiveSection] = useState('ABOUT ME');
  const [buttonLabels, setButtonLabels] = useState({
    b1: 'SKILLS',
    b2: 'HACKATHONS',
    b3: 'PROJECTS',
    b4: 'CERTIFICATES',
  });

  const [showButtons, setShowButtons] = useState(false);
  const headerRef = useRef(null);
  const buttonRefs = useRef({});
  const infoScreenRef = useRef(null);

  const handleSwap = (clickedPos) => {
    const header = headerRef.current;
    const button = buttonRefs.current[clickedPos];
    if (!header || !button) return;
    const clickAudio = new Audio('/sounds/click2.wav');
    clickAudio.play();

    const clickedLabel = buttonLabels[clickedPos];
    const currentHeader = title;

    const headerRect = header.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const dx = (buttonRect.left + buttonRect.right) / 2 - (headerRect.left + headerRect.right) / 2;
    const dy = (buttonRect.top + buttonRect.bottom) / 2 - (headerRect.top + headerRect.bottom) / 2;

    header.style.transition = 'transform 0.5s ease';
    button.style.transition = 'transform 0.5s ease';
    header.style.transform = `translate(${dx}px, ${dy}px)`;
    button.style.transform = `translate(${-dx}px, ${-dy}px)`;

    setTimeout(() => {
      header.style.transition = 'none';
      button.style.transition = 'none';
      header.style.transform = 'none';
      button.style.transform = 'none';

      setTitle(clickedLabel);
      setActiveSection(clickedLabel);
      setButtonLabels((prev) => ({
        ...prev,
        [clickedPos]: currentHeader
      }));

      infoScreenRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const buttonPositions = ['b1', 'b2', 'b3', 'b4'];

  // Show buttons only when info-screen is in view
  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = infoScreenRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setShowButtons(sectionTop < windowHeight / 1.5); // show when in lower half
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="main-screen">
        <MysteryStar />
        <div className="name-bar">
          <h1>SHREYA GOYAL</h1>
        </div>
        <div className="under-name postion">
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
      </section>

      <section className="info-screen" ref={infoScreenRef}>
        <div className="section-header">
          <h2 className="section-title" ref={headerRef}>{title}</h2>
        </div>

        <div className="info-content fade-zoom">
          {sectionComponents[activeSection]}
        </div>

        {showButtons && (
          <div className="circle-buttons">
            {buttonPositions.map((pos) => (
              <button
                key={pos}
                className={`circle-btn ${pos}`}
                onClick={() => handleSwap(pos)}
                ref={(el) => (buttonRefs.current[pos] = el)}
              >
                {buttonLabels[pos]}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp/>} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;

