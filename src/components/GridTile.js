import React from 'react';
import { Link } from 'react-router-dom';
import BuoyCall from '../assets/buoy-call-image.png';

const ArticleHeader = props => {
  return (
    <div className="grid-container">
      <Link to="/">
        <div className="grid-text">
        <div className="grid-image">
          <img src={BuoyCall} alt="Buoy Call" />
        </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleHeader;
