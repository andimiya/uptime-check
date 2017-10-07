import React from 'react';
import WorkShowcase from '../../components/WorkShowcase';
import WorkContainer from '../../containers/WorkContainer';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';

class WorkShowcaseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getAllResources = this.getAllResources.bind(this);
    this.handleResourceClick = this.handleResourceClick.bind(this);
    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });
    this.state = {
      content: [],
      selectedContent: {},
      urlSlug: '',
      id: '',
      error: ''
    };
  }

  componentDidMount(){
    this.getAllResources();
  }

  getAllResources(){
    this.client.getEntries()
    .then((entry) => {
      this.setState ({ content: entry.items })
    })
  }

  handleResourceClick(e) {
    console.log(e.target.id, 'click id');
    const currentlySelected = this.state.content.find((workItem) => workItem.fields.slug === e.target.id);
    if (!currentlySelected){
      this.setState ({ error: 'error' })
    } else {
      this.setState({ selectedContent: currentlySelected.fields })
    }
  }

  render(props) {
    return (
      <div className="work-showcase-container outer">
        <WorkShowcase
          title={this.state.selectedContent.title}
          description={this.state.selectedContent.description}
          />
        <WorkContainer
          content={this.state.content}
          handleResourceClick={this.handleResourceClick}
        />
      </div>
    );
  }
};

export default WorkShowcaseContainer;
