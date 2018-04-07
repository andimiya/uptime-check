import React from 'react';
const siteDown = require('../assets/siteDown.svg');
const checkmark = require('../assets/checkmark.svg');

const GridTile = props => {
  
  const upTime = props.backgroundImage === 'Down' ? siteDown : checkmark;
  
  return (
    <div className="grid-container-outer">
      <div className="grid-container">
        <div className="grid-image-block">
          <img className="status-image" src={upTime} alt="Site Status" />
        </div>
        <div className="grid-subtext">
          <div className="caption-title">
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridTile;
