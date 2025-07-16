import React, { useState, useRef } from 'react';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Certificates from './components/Certificates';

const sectionComponents = {
  EDUCATION: <Education />,
  SKILLS: <Skills />,
  PROJECTS: <Projects />,
  HACKATHONS: <Hackathons />,
  CERTIFICATES: <Certificates />
};

function App() {
  const [title, setTitle] = useState('EDUCATION');
  const [activeSection, setActiveSection] = useState('EDUCATION');

  const [buttonLabels, setButtonLabels] = useState({
    tl: 'SKILLS',
    tr: 'HACKATHONS',
    bl: 'PROJECTS',
    br: 'CERTIFICATES'
  });

  const headerRef = useRef(null);
  const buttonRefs = useRef({});

  const handleSwap = (clickedPos) => {
    const header = headerRef.current;
    const button = buttonRefs.current[clickedPos];
    if (!header || !button) return;
    const clickAudio = new Audio('/sounds/click2.wav');
    clickAudio.play();

    const clickedLabel = buttonLabels[clickedPos];
    const currentHeader = title;

    // Get center distance for animation
    const headerRect = header.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const dx = (buttonRect.left + buttonRect.right) / 2 - (headerRect.left + headerRect.right) / 2;
    const dy = (buttonRect.top + buttonRect.bottom) / 2 - (headerRect.top + headerRect.bottom) / 2;

    // Animate transform
    header.style.transition = 'transform 0.3s ease-in';
    button.style.transition = 'transform 0.3s ease-in';
    header.style.transform = `translate(${dx}px, ${dy}px)`;
    button.style.transform = `translate(${-dx}px, ${-dy}px)`;

    setTimeout(() => {
      // Reset transform
      header.style.transition = 'none';
      button.style.transition = 'none';
      header.style.transform = 'none';
      button.style.transform = 'none';

      // Swap the header and button label
      setTitle(clickedLabel);
      setActiveSection(clickedLabel);
      setButtonLabels((prev) => ({
        ...prev,
        [clickedPos]: currentHeader
      }));

      document.querySelector('.info-screen')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const buttonPositions = ['tl', 'tr', 'bl', 'br'];

  return (
    <>
      <section className="main-screen">
        <div className="name-bar">
          <h1>SHREYA GOYAL</h1>
        </div>
      </section>

      <section className="info-screen">
        <div className="section-header">
          <h2 className="section-title" ref={headerRef}>
            {title}
          </h2>
        </div>

        <div className="info-content fade-zoom">
          {sectionComponents[activeSection]}
        </div>

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
      </section>
    </>
  );
}

export default App;