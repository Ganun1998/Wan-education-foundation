import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import address icon
import './Contacts.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <>
            <Navbar />
            <div className='about-hero'>
                <div className='about-hero-text container'>
                    <h1>Our Contacts</h1>
                </div>
            </div>
            <div className="contacts-container">
                <div className="contacts-info">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</p>
                    <h2>Get in Touch</h2>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:info@wan-edu.org">info@wan-edu.org</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> Phone: +251952212209
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Address:<br />
                        White Town,<br />
                        Ayod county, junglei State, South Sudan
                    </p>
                    <div className="socials-media">
                        <h2>Follow Us</h2>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a></li>
                        </ul>
                    </div>
                    <div className="contacts-form">
                        <h2>Quick Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <label>Message:</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31597.653622614573!2d31.372371905101836!3d8.131312994422723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d8.1528093!2d31.4002669!4m5!1s0x171cb84d8787d3b5%3A0xbfacc5e649f51d90!2sAyod%2C%20South%20Sudan!3m2!1d8.131314999999999!2d31.411341!5e0!3m2!1sen!2set!4v1760454387377!5m2!1sen!2set"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contacts;