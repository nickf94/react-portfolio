import React, { Component } from 'react';
import pizzaApp from './assets/pizzaApp.jpg';
import railsApp from './assets/railsApp.jpg';
import terminalApp from './assets/terminalApp.jpg';
import alphaBlog from './assets/alphaBlog.jpg';
import financeTracker from './assets/financeTracker.jpg';
import './styles/styles.scss'

class Projects extends Component {
  render() {
    return(
    <div className="projects">
      <div>
        <img src={pizzaApp}  fluid rounded />
        <a target="_blank" href="https://github.com/nickf94/PizzaApp">
          <button className="projects-btn">PizzaApp</button>
        </a>
      </div>

      <div>
        <img src={railsApp} fluid rounded />
        <a target="_blank" href="https://rails-marketplace-app.herokuapp.com/">
          <button className="projects-btn">RailsApp</button>
        </a>
      </div>

      <div>
        <img src={terminalApp} fluid rounded />
        <a target="_blank" href="https://github.com/nickf94/Question-and-Answers">
          <button className="projects-btn">TerminalApp</button>
        </a>
      </div>

        <div>
          <img src={alphaBlog} fluid rounded />
          <a target="_blank" href="https://alpha-blog1994.herokuapp.com/">
            <button className="projects-btn">AlphaBlog</button>
          </a>
        </div>

        <div>
          <img src={financeTracker} fluid rounded />
          <a target="_blank" href="https://nicks-finance-tracker.herokuapp.com/">
            <button className="projects-btn">Finance Tracker App</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Projects;
