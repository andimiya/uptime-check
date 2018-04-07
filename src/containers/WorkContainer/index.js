import React from 'react';
import GridTile from '../../components/GridTile';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render(props) {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          <GridTile
            key="1"
            id="1"
            title="Sudokrew.com"
          />
          <GridTile
            key="2"
            id="2"
            title="manomano.io"
          />
          <GridTile
            key="3"
            id="3"
            title="onthecarousel.com"
          />
        </div>
      </div>
    )
  };
};

export default WorkContainer;
