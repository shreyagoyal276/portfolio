import React from 'react';
import './style/Skills.css';

const skillData = [
  {
    title: "Programming Languages",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", name: "C" },
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
      {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter"}
    ]
  },
  {
    title: "Web Development",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", name: "Flask" },
      {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
      {icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" }
    ]
  },
  
  
  {
    title: "AI/ML",
    items: [
      { name: "Supervised Learning" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", name: "OpenCV"},
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", name: "Scikit-Learn" },
      { name: "NLTK"}
    ]
  },
  {
    title: "UI/UX",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "VS Code" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", name: "GitHub" }
    ]
  },
  {
    title: "Data Visualization",
    items: [
      { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/512px-New_Power_BI_Logo.svg.png",name: "Power BI"},
      { icon: "https://www.svgrepo.com/show/342141/qgis.svg",name: "QGIS"},
      { icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", name: "Matplotlib" }
    ]
  },
  {
    title: "Concepts",
    items: [
      { name: "OOPs" },
      { name: "Data Structures" },
      { name: "Algorithms" }
    ]
  },
  
  {
    title: "Soft Skills",
    items: [
      { name: "Teamwork" },
      { name: "Leadership" },
      { name: "Problem Solving" },
      { name: "Quick Learner" },
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-tiles">
      {skillData.map((category, index) => (
        <div className="skill-card" key={index}>
          <h3 className="skill-card-title">{category.title}</h3>
          <div className="skill-card-body">
            {category.items.map((item, i) =>
              item.icon ? (
                <a key={i} className="skill-icon" title={item.name}>
                  <img src={item.icon} alt={item.name} />
                </a>
              ) : (
                <div key={i} className="skill-pill">{item.name}</div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
