import React, { Component } from 'react';
import './styles/styles.scss'

class Contact extends Component {
  render() {
    return(
      <form className="contact-form" onSubmit={this.onFormSubmit}>
        <div className="contat-label">
          <label htmlFor="email">Email:</label>
          <div>
            <input type="email" placeholder="e.g. johnsmith@gmail.com"  />
          </div>
        </div>
        <div className="contact-label">
          <label htmlFor="title">Title:</label>
          <div>
            <input type="text"  />
          </div>
        </div>
        <div className="contact-label">
          <label for="message">Message:</label>
          <div>
            <textarea  />
          </div>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    )
  }
}

export default Contact;
