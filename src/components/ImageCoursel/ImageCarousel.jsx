import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Import the CSS file

const ImageCarousel = () => {
  const [idx, setIdx] = useState(0);
  const images = [
    './Excellence/e-1.jpg',
    './Excellence/e-2.jpg',
    './Excellence/e-3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const changeImage = (newIdx) => {
    setIdx(newIdx);
  };

  const resetInterval = () => {
    clearInterval();
    setIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="image-container" style={{ transform: `translateX(${-idx * 500}px)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`carousel-image-${i}`} />
        ))}
      </div>
     
    </div>
  );
};

export default ImageCarousel;
