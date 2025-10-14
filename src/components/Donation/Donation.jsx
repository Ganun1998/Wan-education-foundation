import React from 'react';
import './Donation.css'; // Import the CSS file
import { FaHandsHelping, FaDonate, FaUsers } from 'react-icons/fa'; // Import icons

const Donation = () => {
  return (
    <div className="get-involved-container" id='involve'>
      <h1>Get Involved</h1>
      <p className='description'>There are many ways to get involved and make a difference:</p>
      <div className="grid-container">
        <div className="grid-item">
          <FaHandsHelping className="icon" />
          <h2>Volunteer</h2>
          <p>Join us in making a difference by volunteering your time and skills.</p>
          <button className="involve-button">Register as Volunteer</button>
        </div>
        <div className="grid-item">
          <FaDonate className="icon" />
          <h2>Donor</h2>
          <p>Your contributions help us continue our mission. Every donation counts!</p>
          <button className="involve-button">Make Donation</button>
        </div>
        <div className="grid-item">
          <FaUsers className="icon" />
          <h2>Partner</h2>
          <p>Collaborate with us to create a larger impact in the community.</p>
          <button className="involve-button">Register as Partner</button>
        </div>
      </div>
    </div>
  );
};

export default Donation;