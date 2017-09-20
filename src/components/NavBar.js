import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <h1>Andrea Takamiya</h1>
        </Link>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <Link to="/work">
            <p>Work</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/about">
            <p>About</p>
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
    </div>
  );
};

export default NavBar;
