import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='home-hero'>
      <div className='home-hero-text container'>
        <h1>Empowering Education, Transforming Lives</h1>
        <p>Together, we can make a difference in the lives of children through education.</p>
        <a href="#involve">
          <button className='btn'>Get Involved</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;