import React, { Component } from 'react';
import './styles/styles.scss'

class Home extends Component {
  render() {
    return(
      <body>
        <div className="container">
          <div className="content">
            <h1>Welcome</h1>
            <p>My name is Nick and this is my portfolio</p>
            <a href="/projects">
              <button className="btn">Go to my Projects</button>
            </a>
            <a href="/photography">
              <button className="btn">Go to my photos</button>
            </a>
            <div className="social">
            <button className="social">
              <a target="_blank" href="https://github.com/nickf94"><i class="fab fa-github" /></a>
            </button>
            <button className="social">
              <a target="_blank" href="https://www.instagram.com/nick_f94/"><i class="fab fa-instagram" /></a>
            </button>
            </div>
          </div>
        </div>
      </body>
    )
  }
}

export default Home;
