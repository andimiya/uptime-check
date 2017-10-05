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
      content: {},
      error: ''
    };
  }

  componentDidMount(){
    console.log(this.props.location.pathname, 'location');
    let urlSlug = this.props.location.pathname.split('/').pop();
    console.log(urlSlug, 'url');
    this.client.getEntries()
    .then((entry) => {
      console.log(entry, 'entry');
      if (urlSlug === entry.fields) {
        this.setState ({ content: entry })
      }
      this.setState ({ content: entry })
    })
  }

  render(props) {
    console.log(this.state, 'state');
    return (
      <div className="work-showcase-container outer">
        )
        <WorkContainer />
      </div>
    );
  }
};

export default WorkShowcaseContainer;
