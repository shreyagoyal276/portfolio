import React from "react";
import { useNavigate } from 'react-router-dom';
import "./style/Photos.css";

const images = [
  "/gallery/img1.png",
  "/gallery/img2.png",
  "/gallery/img3.png",
  "/gallery/img4.png",
  "/gallery/img5.png",
  "/gallery/img6.png",
  "/gallery/img7.png",
  "/gallery/img8.png"
];

const Photos = () => {
    return (
      <div className="photo-gallery-container">
        <h2 className="photo-gallery-heading">My Photo Gallery📸</h2>
        <div className="masonry">
          {images.map((src, index) => (
            <div className="masonry-item" key={index}>
              <img src={src} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
        <div>
         <a href="/" className="back-button">← Back</a>
        </div>
        
      </div>
    );
  };

export default Photos;
