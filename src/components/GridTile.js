import React from 'react';
import { Link } from 'react-router-dom';
import BuoyCall from '../assets/buoy-call-image.png';

const GridTile = props => {
  return (
    <div className="grid-container-outer">
      <div className="grid-container">
        <div className="grid-image-block" style={{backgroundImage: 'url(https://s3.amazonaws.com/web-ready-andrea/lisbon-sunset-edited+4+2.png)'}}>
          <Link to="/">
            <div className="grid-hover"></div>
          </Link>
        </div>
        <div className="grid-subtext">
          <div className="caption-title">
            <p>Hawaiian Airlines Redesign</p>
          </div>
          <div className="caption-subtext">
            <p>Product Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridTile;
