import React from 'react';
import './About_us.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import { FaFlag, FaEye, FaBullseye } from 'react-icons/fa'; // Importing icons

const About_us = () => {
  return (
    <>
      <Navbar />

      <div className='about-hero'>
        <div className='about-hero-text container'>
          <h1>About Us</h1>
            <p>Learn more about our mission, vision, and values.</p>
        </div>
      </div>
      
      <About />
      
      {/* Mission, Vision, Objectives Section */}
      <div className='mission-vision-objectives'>
        <div className='mission-container'>
          <div className='mission'>
            <FaFlag className='icon' />
            <h2>Our Mission</h2>
            <p>Our mission is to create a positive impact in the community through a variety of innovative initiatives designed to empower individuals and foster a supportive environment.</p>
          </div>
          <div className='vision'>
            <FaEye className='icon' />
            <h2>Our Vision</h2>
            <p>To be a leader in educational innovation, inspiring future generations to achieve their dreams.</p>
          </div>
          <div className='objectives'>
            <FaBullseye className='icon' />
            <h2>Our Objectives</h2>
            <ul>
              <li>Provide accessible learning resources.</li>
              <li>Foster a community of learners and educators.</li>
              <li>Encourage lifelong learning and personal development.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className='core-values'>
  <h2>Our Core Values</h2>
  <ul>
    <li><strong>Integrity:</strong> Upholding honesty and transparency in all actions.</li>
    <li><strong>Inclusivity:</strong> Embracing diversity and ensuring everyone has a voice.</li>
    <li><strong>Excellence:</strong> Striving for the highest standards in education and service.</li>
    <li><strong>Collaboration:</strong> Working together to achieve common goals.</li>
    <li><strong>Innovation:</strong> Encouraging creativity and new ideas in learning.</li>
    <li><strong>Respect:</strong> Valuing every individual and their contributions.</li>
    <li><strong>Empowerment:</strong> Supporting individuals to take charge of their learning.</li>
    <li><strong>Accountability:</strong> Taking responsibility for our actions and their impact.</li>
    <li><strong>Passion:</strong> Fostering a love for learning and teaching.</li>
    <li><strong>Resilience:</strong> Encouraging perseverance in the face of challenges.</li>
  </ul>
</div>

      <Footer />
    </>
  );
}

export default About_us;