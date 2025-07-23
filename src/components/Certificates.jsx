import React from 'react';
import './style/Certificates.css';

const certificates1 = [
{
  title: "Advanced Learning Algorithms",
  image: "/certificates/coursera2.png",
  link: "https://www.coursera.org/account/accomplishments/records/AENI7HHQDDMZ"
},{
  title: "Supervised Machine Learning",
  image: "/certificates/coursera1.png",
  link: "https://www.coursera.org/account/accomplishments/verify/TAFRVETSLTHP"
}
]

const certificates2 = [
  {
    title: "HackSagon 2025",
    image: "/certificates/hacksaogn2025.png",
  },
  {
    title: "Code Coalescence 2025",
    image: "/certificates/code_coalescence2024.png",
  },
  {
    title: "HackOrbit 2025",
    image: "/certificates/hackorbit2025.png",
  },
  {
    title: "IITK DS Hackathon",
    image: "/certificates/iitkDSHackathon.png",
  },
]
const certificates3 = [
  {
    title: "Enigma Workshop 2025",
    image: "/certificates/enigma2025.png",
  },
  {
    title: "Volunteer at Galactic Pi-rates Event",
    image: "/certificates/galacti_pi_rates.png",
  },
  {
    title: "Geek to Grad Event",
    image: "/certificates/geek_to_grad.png",
  },
  {
    title: "Geek Fusion Event",
    image: "/certificates/geekFusion2025.png",
  },
  {
    title: "Mathemania",
    image: "/certificates/mathemania2024.png",
  },
  {
    title: "Ramanujan's Leagcy",
    image: "/certificates/ramanujans_legacy.png",
  },
  {
    title: "X-Calibre",
    image: "/certificates/x-callibre.png",
  },
  {
    title: "Build your own GPT workshop 2024",
    image: "/certificates/buil_your_own_gpt_workshop.jpg",
  },
  // Add more certificates as needed
];

const CertificateSection = () => {
  return (
    <div className="certificates-container">
      
      <h3 className='header'>COURSES</h3>
      <div className="certificate-grid">
        {certificates1.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            {/* <p className="certificate-title">{cert.title}</p> */}
          </a>
        ))}
      </div>
      
      <h3 className='header'>HACKATHONS</h3>
      <div className="certificate-grid">
        {certificates2.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            {/* <p className="certificate-title">{cert.title}</p> */}
          </a>
        ))}
      </div>
      
      <h3 className='header'>EVENTS & WORKSHOPS</h3>
      <div className="certificate-grid">
        {certificates3.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            {/* <p className="certificate-title">{cert.title}</p> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;
