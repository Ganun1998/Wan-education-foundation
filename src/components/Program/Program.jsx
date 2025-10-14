import React from 'react';
import './Program.css'; // Import the CSS file
import child_friendly1 from '../../assets/child_friendly1.jpg'; // Example image import
import child_friendly2 from '../../assets/child_friendly2.jpg';
import training1 from '../../assets/training1.jpg';
import Navbar from '../Navbar/Navbar';


const Program = () => {
    const programs = [
        { 
            title: "Child Friendly Space", 
            description: "A safe and nurturing environment for children.", 
            image: child_friendly1 // Use imported image
        },
        { 
            title: "Youth Vocational Training", 
            description: "Skill development programs for youth.", 
            image: training1 // Use imported image
        },
        { 
            title: "Primary Education", 
            description: "Providing foundational education for young learners.", 
            image: child_friendly2 // Use imported image
        },
        
    ];

    return (
        <>
        <Navbar />
        <section className="programs-section">
            <h2 className="programs-title">Our Programs</h2>
            <p className='description'>We offer a variety of programs to support our community:</p>
            <div className="programs-grid">
                {programs.map((program, index) => (
                    <div className="program-card" key={index}>
                        <img src={program.image} alt={program.title} className="program-image" />
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                    </div>
                ))}
            </div>
        </section>
      </>
    );
};

export default Program;