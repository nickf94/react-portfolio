import React from 'react';
import { Image } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import pizzaApp from './assets/pizzaApp.jpg';
import railsApp from './assets/railsApp.jpg';
import terminalApp from './assets/terminalApp.jpg';
import { Button } from 'react-bootstrap/'
import styled from 'styled-components';

const Styles = styled.div `
  .btn-primary {
    color: white;
    background-color: black;
    border-color: red;
    font-size: 12px;
`

export const Home = () => (
<React.Fragment>
  <Styles>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <div>
          <Button target="_blank" href="https://github.com/nickf94/PizzaApp">
            <h5>Pizza Order App with Swift</h5>
            </Button>
            <Image src={pizzaApp}  fluid rounded />
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
          <Button target="_blank" href="https://github.com/nickf94/Rails-Marketplace-App">
            <h5>Marketplace Application with Rails</h5>
            </Button>
            <Image src={railsApp} fluid rounded />
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div>
          <Button target="_blank" href="https://github.com/nickf94/Question-and-Answers">
            <h5>Terminal Application using Ruby</h5>
            </Button>
            <Image src={terminalApp} fluid rounded />
          </div>
        </Col>
      </Row>
    </Container>
  </Styles>
</React.Fragment>
)
