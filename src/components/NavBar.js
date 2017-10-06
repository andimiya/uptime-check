import React from 'react';
import { Link } from 'react-router-dom';
const nameScript = require('../assets/name-script.png');

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <img src={nameScript} width="180px" alt="Andrea Takamiya" />
        </Link>
      </div>
      <div className="menu-container">
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
    </div>
  );
};

export default NavBar;
