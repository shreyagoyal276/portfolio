import React from "react";
import { useNavigate } from 'react-router-dom';
import "./style/Photos.css";

const images = [
  "/gallery/img1.png",
  "/gallery/img2.png",
  "/gallery/img8.png",
  "/gallery/img30.jpg",
  "/gallery/img3.png",
  "/gallery/img26.jpg",
  "/gallery/img5.png",
  "/gallery/img4.png",
  "/gallery/img13.png",
  "/gallery/img14.png",
  "/gallery/img10.png",
  "/gallery/img11.png",
  
  "/gallery/img29.jpg",
  "/gallery/img24.jpg",

  "/gallery/img21.jpg",
  "/gallery/img22.jpg",
  "/gallery/img23.jpg",
  "/gallery/img16.png",
  "/gallery/img25.jpg",
  
  "/gallery/img9.png",
  "/gallery/img27.jpg",
  "/gallery/img7.png",
  "/gallery/img28.jpg",
  "/gallery/img6.png",
];

const Photos = () => {
  return (
    <div className="photo-gallery-container">
      <h2 className="photo-gallery-heading">Captures📸</h2>
      <p className="photo-gallery-subheading">A glimpse into moments captured by me</p>
      <div className="masonry">
        {images.map((src, index) => (
          <div className="masonry-item" key={index}>
            <img
              src={src}
              alt={`Gallery ${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="back-button-container">
        <a href="/" className="back-button">← Back</a>
      </div>
    </div>
  );
};

export default Photos;
