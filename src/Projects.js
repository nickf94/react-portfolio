import React, { Component } from 'react';
import pizzaApp from './assets/pizzaApp.jpg';
import railsApp from './assets/railsApp.jpg';
import terminalApp from './assets/terminalApp.jpg';
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
          <a target="_blank" href="https://github.com/nickf94/Rails-Marketplace-App">
          <button className="projects-btn">RailsApp</button>
          </a>
        </div>

        <div>
          <img src={terminalApp} fluid rounded />
          <a target="_blank" href="https://github.com/nickf94/Question-and-Answers">
          <button className="projects-btn">TerminalApp</button>
          </a>
      </div>
      </div>
    )
  }
}

export default Projects;
