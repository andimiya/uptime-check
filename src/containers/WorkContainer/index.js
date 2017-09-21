import React from 'react';
import GridTile from '../../components/GridTile';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });
    this.getWorkContent = this.getWorkContent.bind(this);
    this.state = {
      content:[],
      error: ''
    };
  }

  componentDidMount(){
    this.client.getContentTypes()
      .then(this.getWorkContent)
      .catch((error) => {
        console.log(error);
      });
  }

  getWorkContent({ content }) {

  }

  render() {
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
    )
  };
};

export default WorkContainer;
