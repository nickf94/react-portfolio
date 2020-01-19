import React from 'react';
import Jet1mage from './assets/Jet1mage.jpg';
import firework1mage from './assets/firework1mage.jpg';
import Club1mage from './assets/Club1mage.jpg';
import newyearsimage from './assets/newyearsimage.jpg';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'

const Styles = styled.div `
  .figure {
    align-center: inherit;
  }

  .figure-img {
    margin-right: 5rem;
  }

  .figure-caption {
    color: black;
  }
`

export const Photography = () => (
<React.Fragment>
  <Styles>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Jet1mage}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firework1mage}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Club1mage}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newyearsimage}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  </Styles>
</React.Fragment>
)
export default Photography;
