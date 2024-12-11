import React, { useState } from 'react';
import '../styles/navbar.scss';
import logo from '../assets/logo.png'; // Correct path to the logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">
          <img src={logo} alt="ProVital Logo" />
          <span>ProVital</span>
        </div>
        {/* Hamburger menu button */}
        <button
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
      {/* Navbar links */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><button>List your practice</button></li>
        <div className="divider"></div>
        <li><button>For Employers</button></li>
        <div className="divider"></div>
        <li><button>Courses</button></li>
        <div className="divider"></div>
        <li><button>Books</button></li>
        <div className="divider"></div>
        <li><button>Speakers</button></li>
        <div className="divider"></div>
        <li><button>Doctors</button></li>
        <div className="divider"></div>
        <li className="dropdown">
          <button>Login/Signup</button>
          <ul className="dropdown-menu">
            <li>
              Doctor
              <a href="/doctor-login" className="dropdown-link">Login</a>
              <a href="/doctor-signup" className="dropdown-link">SignUp</a>
            </li>
            <li>
              Patient
              <a href="/patient-login" className="dropdown-link">Login</a>
              <a href="/patient-signup" className="dropdown-link">SignUp</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
