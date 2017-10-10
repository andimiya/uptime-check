import React from 'react';
import { Link } from 'react-router-dom';
const hamburger = require('../assets/hamburger.svg');

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="name-container">
        <Link to="/">
          <p>Andrea Takamiya</p>
        </Link>
      </div>
      <div className="menu-item-container">
        <div className="menu-item">
          <Link to="/work">
            <p>Work</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/resume">
            <p>Resume</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <Link to="/work">
          <img src={hamburger} alt="Work, Resume, Contact" width="40px"/>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
