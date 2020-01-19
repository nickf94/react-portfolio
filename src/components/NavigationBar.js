import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: white;
    }
  }

  button {
    color: white;
  }

`;

export const NavigationBar = () => (
  <Styles>
    <Navbar sticky="" expand="lg" variant="dark">
    <Navbar.Brand href="/">Nick Fletcher</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/photography">Photography</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </Styles>
)
