import React from 'react';
import GridTile from '../../components/GridTile';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectedWork = this.selectedWork.bind(this);
    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });
    this.state = {
      content: [],
      selectedWork: '',
      error: ''
    };
  }

  componentDidMount(){
    this.client.getEntries()
    .then((entry) => {
      this.setState ({ content: entry.items })
    })
  }

  selectedWork(e){
    console.log(e.target.id);
  }

  render(props) {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          {this.state.content.map(({ fields, sys }, index) => {
            return (
              <GridTile
                key={sys.id}
                title={fields.title}
                position={fields.position}
                slug={fields.slug}
                workSample={fields.workSample.fields.file.url}
                selectedWork={this.selectedWork}
              />
            );
          })}
        </div>
      </div>
    )
  };
};

export default WorkContainer;
