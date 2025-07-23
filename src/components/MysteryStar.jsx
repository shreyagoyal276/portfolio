import React, { useState, useEffect, useRef } from 'react';
import './style/MysteryStar.css';

const facts = [
    "🌌 What if the universe is just one bubble in a cosmic foam?",
    "🎯 There’s a perfect crater on Mars that looks like a smiley face.",
    "👀 A spoonful of a neutron star would weigh about a billion tons.",
    "🚀 The ISS astronauts see 16 sunrises and sunsets a day.",
    "🌙 The Moon is moving away from Earth by about 3.8 cm every year.",
    "🎧 Space is silent - because sound can’t travel without a medium.",
    "🌍 Earth is hit by 100 tons of space dust every day - and you’ve probably inhaled some!",
    "🌀 Time moves slower near a black hole.",
    "🎨 No two stars twinkle exactly the same way. Their twinkle is like a cosmic fingerprint.",
    "💭 If you could travel at the speed of light, it would still take over 4 years to reach the nearest star!"
  ];
  

const getRandomPosition = () => ({
  top: `${(Math.random() * 30)+5}vh`,
  left: `${Math.random() * 80 + 10}vw`
});

const MysteryStar = () => {
  const [stars, setStars] = useState([]);
  const [card, setCard] = useState({ show: false, x: 0, y: 0, text: "" });
  const timerRef = useRef(null);

  useEffect(() => {
    const generatedStars = [];
    for (let i = 0; i < 20; i++) {
      const clickable = i < 5;
      generatedStars.push({
        ...getRandomPosition(),
        clickable,
        fact: facts[Math.floor(Math.random() * facts.length)],
        id: i
      });
    }
    setStars(generatedStars);
  }, []);


  const showCard = (e, fact) => {
    const rect = e.target.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.width / 2;
  
    const padding = 20; 
    
    if (x + padding > window.innerWidth) {
      x = window.innerWidth - padding - 50;
    } else if (x < 20) {
      x = 20;
    }


  
    if (y < 100) {
      y = rect.bottom + 80;
    }
  
    setCard({ show: true, x, y, text: fact });
  
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCard({ ...card, show: false });
    }, 4000);
  };
  

  return (
    <div className="mystery-wrapper">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`mystery-star ${star.clickable ? 'clickable' : ''}`}
          style={{ top: star.top, left: star.left }}
          onClick={(e) => star.clickable && showCard(e, star.fact)}
        />
      ))}

      {card.show && (
        <div className="mystery-card" style={{ top: card.y, left: card.x }}>
          <h4>🌌 Space Fact</h4>
          <p>{card.text}</p>
        </div>
      )}
    </div>
  );
};

export default MysteryStar;
