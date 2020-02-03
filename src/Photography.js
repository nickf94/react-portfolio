import React, { Component } from 'react';
import Fireworks from './assets/Fireworks.jpg';
import JetPlaneClose from './assets/JetPlaneClose.jpg';
import redFireworks from './assets/redFireworks.jpg';
import SkateBoards from './assets/SkateBoards.jpg';
import './styles/styles.scss'

class Photography extends Component {
  render() {
    return (
      <div className="slider">
        <div className="slide">
          <p>Slide 1</p>
        </div>
        <div className="slide">
          <p>Slide 2</p>
        </div>
        <div className="slide">
          <p>Slide 3</p>
        </div>
        <div className="slide">
          <p>Slide 4</p>
        </div>
      </div>
    )
  }
}

export default Photography;
