import React, { useState } from 'react';
import './HealthTipsCarousel.css';

const HealthTipsCarousel = () => {
    const healthTips = [
        { id: 1, tip: 'Stay Hydrated', htip: 'Drink water throughout the day.', image: '/images/tip1.jpg' },
        { id: 2, tip: 'Regular Exercise', htip: 'Get at least 30 minutes of exercise daily.', image: '/images/tip2.jpg' },
        { id: 3, tip: 'Balanced Diet', htip: 'Include fruits, veggies, and whole grains.', image: '/images/tip3.jpg' },
        { id: 4, tip: 'Sleep Well', htip: 'Aim for 7-9 hours of sleep nightly.', image: '/images/tip4.jpg' },
        { id: 5, tip: 'Mental Health', htip: 'Take breaks and practice mindfulness.', image: '/images/tip5.jpg' },
        { id: 6, tip: 'Limit Sugar Intake', htip: 'Cut down on sugary drinks and snacks.', image: '/images/tip6.jpg' },
        { id: 7, tip: 'Regular Check-ups', htip: 'Visit your doctor regularly.', image: '/images/tip7.jpg' },
        { id: 8, tip: 'Practice Good Hygiene', htip: 'Wash hands frequently.', image: '/images/tip8.jpg' },
        { id: 9, tip: 'Avoid Smoking', htip: 'Don’t smoke for better health.', image: '/images/tip9.jpg' },
      ];

  const handleScroll = (scrollOffset) => {
    const container = document.getElementById('carousel-container');
    container.scrollLeft += scrollOffset;
  };

  return (
    <div className="container">
      <h1 className="heading">Health Tips</h1>

      {/* Carousel Wrapper */}
      <div className="carousel-wrapper">
        <button onClick={() => handleScroll(-300)} className="arrow-button previous">
          &lt;
        </button>

        <div id="carousel-container" className="carousel-container">
          {healthTips.map((tips) => (
            <div key={tips.id} className="card">
              <div className="image-container">
                <img src={tips.image} alt={tips.tip} />
                <div className="htip-overlay">
                  <h4>{tips.htip}</h4>
                </div>
              </div>
              <h3>{tips.tip}</h3>
            </div>
          ))}
        </div>

        <button onClick={() => handleScroll(300)} className="arrow-button next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HealthTipsCarousel;
