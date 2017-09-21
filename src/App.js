import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomepageContainer from './containers/HomepageContainer';
import WorkContainer from './containers/WorkContainer';
import WorkShowcaseContainer from './containers/WorkShowcaseContainer';
import AboutUsContainer from './containers/AboutUsContainer';
import Footer from './components/Footer';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={HomepageContainer} />
        <Route exact path="/work" component={WorkContainer} />
        <Route exact path="/work/:ha" component={WorkShowcaseContainer} />
        <Route exact path="/about" component={AboutUsContainer} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;
