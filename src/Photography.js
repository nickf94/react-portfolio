import React, { Component } from 'react';
import './styles/styles.scss'

class Photography extends Component {
  render() {
    return (
      <div className="slider">
        <span className="slide">
          <p>Slide 1</p>
        </span>
        <span className="slide">
          <p>Slide 2</p>
        </span>
        <span className="slide">
          <p>Slide 3</p>
        </span>
        <span className="slide">
          <p>Slide 4</p>
        </span>
      </div>
    )
  }
}

export default Photography;
