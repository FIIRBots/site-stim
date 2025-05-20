// src/components/LogoSlider.jsx
import React from 'react';
import '../assets/css/logo-slider.css';

// logos: array de URL-uri sau importuri de imagine
export default function LogoSlider({ logos }) {
  // Asigurăm minim 5 elemente, replicând dacă e nevoie
  const display = logos.length >= 5
    ? logos
    : Array.from({ length: 5 }, (_, i) => logos[i % logos.length]);

  // Dublăm lista pentru efect continuu
  const track = [...display, ...display];

  return (
    <div className="slider">
      <div className="slide-track">
        {track.map((src, idx) => (
          <div key={idx} className="slide">
            <img src={src} alt={`Partner ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
