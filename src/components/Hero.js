import React from 'react';
import '../styles/hero.scss';

// Import images for the scrolling columns
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';


const Hero = () => {
  return (
    <section className="hero">
      {/* Static search bar at the top */}
      <div className="hero-search">
        <input type="text" placeholder="Condition, procedure, symptoms..." />
        <input type="text" placeholder="City, state, or zipcode" />
        <button>Find now</button>
      </div>

      {/* Hero content with images behind it */}
      <div className="hero-content">
        <div className="hero-images">
          <div className="column column-1">
            <img src={image1} alt="hero1" />
            <img src={image2} alt="hero2" />
            <img src={image3} alt="hero3" />
          </div>
          <div className="column column-2">
            <img src={image4} alt="hero4" />
            <img src={image2} alt="hero5" />
            <img src={image3} alt="hero6" />
          </div>
        </div>

        <div className="hero-text">
          <h1>Book an appointment with lifestyle medicine experts</h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
