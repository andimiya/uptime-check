import React from 'react';
import GridTile from '../../components/GridTile';
import { ajax } from 'jquery';
import cheerio from 'cheerio';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getSiteSudokrew = this.getSiteSudokrew.bind(this);
    this.getSiteManomano = this.getSiteManomano.bind(this);
    this.getSiteCarousel = this.getSiteCarousel.bind(this);

    this.state = {
      sudokrewUptime: '',
      manomanoUptime: '',
      carouselUptime: ''
    }
  }

  componentDidMount() {
    this.getSiteSudokrew();
    this.getSiteManomano();
    this.getSiteCarousel();
  }

  getSiteSudokrew() {
    ajax(`http://localhost:8080/api/url/sudokrew.com`).then(body => {
      let $ = cheerio.load(body);
      let textSample = $('.navigation__link').text();

      if (!textSample) {
        this.setState({
          sudokrewUptime: 'Down'
        })
      }
      else {
        this.setState({
          sudokrewUptime: 'Up'
        })
      }
    });
  }

  getSiteManomano() {
    ajax(`http://localhost:8080/api/url/manomano.io`).then(body => {
      let $ = cheerio.load(body);
      let textSample = $('meta[property="og:title"]').attr('content')
      
      if (!textSample) {
        this.setState({
          manomanoUptime: 'Down'
        })
      }
      else {
        this.setState({
          manomanoUptime: 'Up'
        })
      }
    });
  }

  getSiteCarousel() {
    ajax(`http://localhost:8080/api/url/onthecarousel.com`).then(body => {
      let $ = cheerio.load(body);
      let textSample = $('.menu__link').text();
      if (!textSample) {
        this.setState({
          carouselUptime: 'Down'
        })
      }
      else {
        this.setState({
          carouselUptime: 'Up'
        })
      }
    });
  }

  render() {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          <GridTile
            key="1"
            id="1"
            backgroundImage={this.state.sudokrewUptime}
            title="Sudokrew.com"
          />
          <GridTile
            key="2"
            id="2"
            backgroundImage={this.state.manomanoUptime}
            title="manomano.io"
          />
          <GridTile
            key="3"
            id="3"
            backgroundImage={this.state.carouselUptime}
            title="onthecarousel.com"
          />
        </div>
      </div>
    )
  };
};

export default WorkContainer;
