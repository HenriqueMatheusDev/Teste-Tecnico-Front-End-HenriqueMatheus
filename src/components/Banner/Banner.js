import React, { useState, useEffect } from 'react';
import './Banner.css';

import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

const banners = [banner1, banner2, banner3];

function Banner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner ${index === currentBannerIndex ? 'active' : ''}`}
        >
          <img src={banner} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Banner;
