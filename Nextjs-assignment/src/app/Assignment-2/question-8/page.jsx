
// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

// pages/Page.jsx

'use client';
import React, { useState, useEffect } from 'react';
import '@/app/styles/welcome2.css'; // Adjust this if needed

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [intervalTime, setIntervalTime] = useState(3000);

  const images = [
    'https://picsum.photos/seed/slide1/800/400.jpg',
    'https://picsum.photos/seed/slide2/800/400.jpg',
    'https://picsum.photos/seed/slide3/800/400.jpg',
    'https://picsum.photos/seed/slide4/800/400.jpg',
    'https://picsum.photos/seed/slide5/800/400.jpg',
    'https://picsum.photos/seed/slide6/800/400.jpg',
    'https://picsum.photos/seed/slide7/800/400.jpg',
    'https://picsum.photos/seed/slide8/800/400.jpg',
    'https://picsum.photos/seed/slide9/800/400.jpg',
    'https://picsum.photos/seed/slide10/800/400.jpg',
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, intervalTime);
    }
    return () => clearInterval(interval);
  }, [isPlaying, intervalTime, images.length]);

  const handlePlayPause = () => setIsPlaying((prev) => !prev);
  const handlePrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const handleIntervalChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1000) setIntervalTime(value); // avoid too-fast transitions
  };

  return (
    <div className="slideshow-container">
      <h1 className="slideshow-title">React Slideshow with Controls</h1>

      <div className="slideshow">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === currentSlide ? 'active' : ''}`}
          >
            {i === currentSlide && <img src={img} alt={`Slide ${i + 1}`} />}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={handlePrevious} className="btn">
          &larr; Previous
        </button>
        <button onClick={handlePlayPause} className="btn">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNext} className="btn">
          Next &rarr;
        </button>
        <div className="interval-control">
          <label htmlFor="interval">Interval (ms):</label>
          <input
            type="number"
            id="interval"
            min="1000"
            step="500"
            value={intervalTime}
            onChange={handleIntervalChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
