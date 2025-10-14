import React from 'react';
import { Facebook, Twitter, Instagram, } from 'lucide-react'; // Import the icons you need
import './Footer.css'; // Import the CSS file for styling
import logo1 from '../../assets/logo1.jpg'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo1} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Empowering communities through compassion and action. Join us in making a difference.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              {["About Us", "Programs", "Contacts", "Donate"].map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: info@wan-edu.org</p>
          <p>Phone: +251952212209</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-rights">
          © {new Date().getFullYear()} Wan-Education-Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;