import React from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import seaImage from '../assets/seaImage.jpg';
import github from '../assets/github.jpg';
import twitter from '../assets/twitter.jpg';
import instagram from '../assets/instagram.jpg';

const Styles = styled.div `
  .jumbo {
    background: url(${seaImage}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 200px;
    font-family: 'Dancing Script', cursive;
    margin-bottom: 0px;
}

  .overlay {
    // background-color: #000;
    // opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

`;




export const Footer = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
        <Container>
          <h3>©Made by Nick Fletcher 2020</h3>
        <div>
          <Row>
            <Col xs={6} md={4}>
              <a target="_blank" href="http://github.com" rel="noopener noreferrer">
                <Image src={github} fluid rounded />
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a target="_blank" href="https://www.instagram.com/nick_f94/" rel="noopener noreferrer">
                <Image src={instagram} fluid rounded />
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a target="_blank" href="https://twitter.com/Nick_Fletcher94" rel="noopener noreferrer">
                <Image src={twitter} fluid rounded />
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </Jumbo>
  </Styles>
)
