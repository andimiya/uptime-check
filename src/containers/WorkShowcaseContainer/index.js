import React from 'react';
import WorkShowcase from '../../components/WorkShowcase';
import WorkContainer from '../../containers/WorkContainer';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';

class WorkShowcaseContainer extends React.Component {
  constructor(props) {
    super(props);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });
    this.state = {
      content: [],
      error: ''
    };
  }

  componentDidMount(){
    this.client.getEntries()
    .then((entry) => {
      this.setState ({ content: entry.items })
    })
  }

  render(props) {
    return (
      <div className="work-showcase-container outer">
        {this.state.content.map(({ fields, sys }, index) => {
          console.log(fields);
          return (
            <WorkShowcase
              key={sys.id}
              title={fields.title}
              position={fields.position}
              description={fields.description}
              workSample={fields.workSample.fields.file.url}
            />
          )
        })}
        <WorkContainer />
      </div>
    );
  }
};

export default WorkShowcaseContainer;
