import React from 'react';
import { Image } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import pizzaApp from './assets/pizzaApp.jpg';
import railsApp from './assets/railsApp.jpg';
import terminalApp from './assets/terminalApp.jpg';
import { Button } from 'react-bootstrap/'

export const Projects = () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <div>
            <Image src={pizzaApp}  fluid rounded />
            <Button target="_blank" href="https://github.com/nickf94/PizzaApp">PizzaApp</Button>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
            <Image src={railsApp} fluid rounded />
            <Button target="_blank" href="https://github.com/nickf94/Rails-Marketplace-App">RailsApp</Button>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
            <Image src={terminalApp} fluid rounded />
            <Button target="_blank" href="https://github.com/nickf94/Question-and-Answers">TerminalApp</Button>
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)
