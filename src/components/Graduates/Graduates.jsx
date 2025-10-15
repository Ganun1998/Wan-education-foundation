import React from 'react';
import './Graduates.css';
import ganun from '../../assets/ganun.jpg';

const graduatesData = [
    {
        name: 'Alice Johnson',
        department: 'Computer Science',
        image: ganun,
        socialMedia: {
            facebook: 'https://facebook.com/alicejohnson',
            twitter: 'https://twitter.com/alicejohnson',
            linkedin: 'https://linkedin.com/in/alicejohnson',
        },
    },
    {
        name: 'Bob Smith',
        department: 'Mathematics',
        image: ganun,
        socialMedia: {
            facebook: 'https://facebook.com/bobsmith',
            twitter: 'https://twitter.com/bobsmith',
            linkedin: 'https://linkedin.com/in/bobsmith',
        },
    },
    {
        name: 'Bob Smith',
        department: 'Mathematics',
        image: ganun,
        socialMedia: {
            facebook: 'https://facebook.com/bobsmith',
            twitter: 'https://twitter.com/bobsmith',
            linkedin: 'https://linkedin.com/in/bobsmith',
        },
    },
    // Add more graduates as needed
];

const Graduates = () => {
    return (
        <div className="graduates-container">
            {graduatesData.map((graduate, index) => (
                <div key={index} className="graduate-card">
                    <img src={graduate.image} alt={graduate.name} className="graduate-image" />
                    <h3>{graduate.name}</h3>
                    <p>{graduate.department}</p>
                    <div className="social-media-links">
                        <a href={graduate.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href={graduate.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href={graduate.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Graduates;