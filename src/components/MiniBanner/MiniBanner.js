import React from 'react';
import './MiniBanner.css';

import miniBanner1 from '../assets/images/miniBanner1.jpg';
import miniBanner2 from '../assets/images/miniBanner2.jpg';

function MiniBanner() {
  return (
    <div className="mini-banner-container">
      <div className="mini-banner">
        <img src={miniBanner1} alt="Mini Banner 1" />
      </div>
      <div className="mini-banner">
        <img src={miniBanner2} alt="Mini Banner 2" />
      </div>
    </div>
  );
}

export default MiniBanner;
