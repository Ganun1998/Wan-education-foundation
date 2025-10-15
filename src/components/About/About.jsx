import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file
import about from '../../assets/about.png'; // Example image import
import Navbar from '../Navbar/Navbar';

const About = () => {
    // State to hold the current count for each statistic
    const [livesImpacted, setLivesImpacted] = useState(0);
    const [programsRunning, setProgramsRunning] = useState(0);
    const [yearsOfService, setYearsOfService] = useState(0);
    const [satisfactionRate, setSatisfactionRate] = useState(0);

    // Animation effect for counting
    useEffect(() => {
        const countUp = (setter, target, duration) => {
            let start = 0;
            const increment = Math.ceil(target / (duration / 100));

            const interval = setInterval(() => {
                start += increment;
                if (start >= target) {
                    clearInterval(interval);
                    setter(target);
                } else {
                    setter(start);
                }
            }, 100);
        };

        countUp(setLivesImpacted, 1500, 2000); // 1.5K+
        countUp(setProgramsRunning, 10, 2000); // 10+
        countUp(setYearsOfService, 8, 2000); // 8
        countUp(setSatisfactionRate, 90, 2000); // 90%

    }, []);

    return (
        <>
            <Navbar />
            <section className="about-section">
                <h1 className="about-title">About Us</h1>
                <div className="about-container">
                    <img src={about} alt="About Us" className="about-image" />
                    <div className="about-text">
                        <h2>Wan Education Foundation (WEF) </h2>
                        <p>
                           Wan Education Foundation is a dedicated non-profit organization committed to transforming the lives of children and youth in South Sudan and the world. 
                           Our mission is to create a positive impact in the community through a variety of innovative initiatives designed to empower individuals and foster a supportive environment. 
                        </p>
                        <p>
                            At the heart of our work is a deep belief in the potential of every child and young person. We strive to provide opportunities that inspire personal growth and development, ensuring that every individual has access to the resources they need to thrive. 
                            Our approach focuses on holistic development, addressing not only educational needs but also emotional, social, and economic factors that influence the lives of children and youth. 
                        </p>
                        <p>
                            We engage with communities to understand their unique challenges and aspirations, creating tailored solutions that resonate with local needs. 
                            By collaborating with families, educators, and community leaders, we build a network of support that encourages active participation and ownership of initiatives. 
                            Our commitment extends beyond immediate assistance. We aim to instill a sense of hope and resilience in those we serve in the spirit of no child left behind. 
                        </p>
                        <p>
                            Join us in our journey to create a brighter future for all. Together, we can make a difference as an African proverb says, "It takes a village to raise a child."
                        </p>



                    </div>
                </div>
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-number">{livesImpacted}+</div>
                        <div className="stat-description">Lives Impacted</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{programsRunning}+</div>
                        <div className="stat-description">Programs Running</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{yearsOfService}</div>
                        <div className="stat-description">Years of Service</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{satisfactionRate}%</div>
                        <div className="stat-description">Satisfaction Rate</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;