import React, { useState } from 'react';
import './Navbar.css';
import logo1 from '../../assets/logo1.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className="container">
            <img src={logo1} alt="Child Logo" className="navbar-logo" />
            <span className="navbar-title">Wan Education foundation</span> 
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about_us">About Us</Link></li>
                <li><Link to="/service">Programs</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
                <li>
                    <Link to="/donate">
                        <button className='btn'>Donate now</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;