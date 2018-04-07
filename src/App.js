import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WorkContainer from './containers/WorkContainer';
import Footer from './components/Footer';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={WorkContainer} />
        <Footer />
      </div>
    </Router>
  </div>;

export default App;
