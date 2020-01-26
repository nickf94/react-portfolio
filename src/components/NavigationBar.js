import React, { Component } from 'react';
import '../styles/styles.scss'

export default class Navigationbar extends Component {
  render() {
    return(
    <html>
    <body>
      <div class="menu-container">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href ="/photography">Photography</a></li>
                <li><a href ="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </body>
    </html>
  )
  }
}
