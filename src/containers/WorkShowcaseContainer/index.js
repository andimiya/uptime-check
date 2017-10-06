import React from 'react';
import WorkShowcase from '../../components/WorkShowcase';
import WorkContainer from '../../containers/WorkContainer';
import GridTile from '../../components/GridTile';
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
      content: {},
      urlSlug: '',
      id: '',
      error: ''
    };
  }

  componentDidMount(){
    this.getAllResources();
  }

  getAllResources(){
    let urlSlug = this.props.location.pathname.split('/').pop();
    this.client.getEntries()
    .then((entry) => {
      console.log(entry.items[0].fields.slug, 'entry');
      for (let i = 0; i < entry.items.length; i++) {
        if (urlSlug === entry.items[i].fields.slug) {
          console.log('true');
          this.setState ({ content: entry.items[i].fields })
        }
        else {
          console.log('no match');
        }
      }
    })
  }

  handleResourceClick(e) {
    console.log(e.target.id, 'click id');
    this.client.getEntries()
    .then((entry) => {
      for (let i = 0; i < entry.items.length; i++) {
        if (this.state.urlSlug === entry.items[i].fields.slug) {
          console.log('true');
          this.setState ({ content: entry.items[i].fields })

        }
        else {
          console.log('no match');
        }
      }
    })
  }

  render(props) {
    console.log(this.state.content.slug, 'state');
    return (
      <div className="work-showcase-container outer">
        <WorkShowcase
          title={this.state.content.title}
          description={this.state.content.description}
          />
        <WorkContainer>
          <GridTile
            key={this.state.content.id}
            id={this.state.content.slug}
            title={this.state.content.title}
            position={this.state.content.position}
            slug={this.state.content.slug}
            handleResourceClick={this.handleResourceClick}
          />
        </WorkContainer>
      </div>
    );
  }
};

export default WorkShowcaseContainer;
