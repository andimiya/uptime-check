import React from "react";
import GridTile from "../../components/GridTile";
import { ajax } from "jquery";
import cheerio from "cheerio";

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.siteData = [
      {
        url: "sudokrew.com",
        textSample: `".navigation__link").text()`,
        stateKey: "sudokrewUptime"
      },
      {
        url: "manomano.io",
        textSample: `meta[property="og:title"]`,
        stateKey: "manomanoUptime"
      },
      {
        url: "onthecarousel.com",
        textSample: `menu__link`,
        stateKey: "carouselUptime"
      }
    ];

    this.getSite = this.getSite.bind(this);

    this.state = {
      sudokrewUptime: "",
      manomanoUptime: "",
      carouselUptime: ""
    };
  }

  componentDidMount() {
    this.siteData.map(site => {
      return this.getSite(site);
    });
  }

  getSite(site) {
    ajax(`http://localhost:8080/api/url/${site.url}`).then(body => {
      let $ = cheerio.load(body);
      let textSample = $`(${site.textSample}`;
      if (!textSample) {
        this.setState({
          [site.stateKey]: "Down"
        });
      } else {
        this.setState({
          [site.stateKey]: "Up"
        });
      }
    });
  }

  render() {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          {this.siteData.map(site => {
            return (
              <GridTile
                key={`${site.url}`}
                backgroundImage={`this.state.${site.stateKey}`}
                title={`${site.url}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default WorkContainer;
