import React from 'react';
import GridTile from '../../components/GridTile';

const WorkContainer = () => {
  return (
    <div className="work-container outer">
      <div className="grid-area-container">
        <GridTile />
        <GridTile />
        <GridTile />
        <GridTile />
        <GridTile />
      </div>
    </div>
  );
};

export default WorkContainer;
