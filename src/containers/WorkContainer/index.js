import React from 'react';
import GridTile from '../../components/GridTile';

class WorkContainer extends React.Component {

  render(props) {

    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          {this.props.content.map(({ fields, sys }, index) => {
            return (
              <GridTile
                key={sys.id}
                id={fields.slug}
                title={fields.title}
                position={fields.position}
                slug={fields.slug}
                workSample={fields.workSample.fields.file.url}
                handleResourceClick={this.props.handleResourceClick}
              />
            );
          })}
        </div>
      </div>
    )
  };
};

export default WorkContainer;
