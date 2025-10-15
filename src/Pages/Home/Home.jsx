import React from 'react';
import './Home.css';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import Program from "../../components/Program/Program.jsx";
import Donation from "../../components/Donation/Donation.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import Graduates from '../../components/Graduates/Graduates.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Hero />
            <About />
            <Program />
            <Donation />
            <Footer />
        </div>
    );
};

export default Home;