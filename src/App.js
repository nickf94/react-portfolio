import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {  Home }  from './Home';
import { Projects } from './Projects';
import { About } from './About';
import Contact from "./Contact";
import Photography from "./Photography";
import { NoMatch } from './NoMatch';
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/photography" component={Photography} />
            <Route component={NoMatch} />
          </Switch>
        </Router>

      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
