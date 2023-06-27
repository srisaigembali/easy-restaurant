import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/Main.css';
// import Logo from '../../assets/images/logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              {/* eslint-disable-next-line */}
              {/* <img src={Logo} /> */}
              Easy Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link to="/" className="mainMenu">
                Home
              </Link>
              <Link to="/menu" className="mainMenu">
                Menu
              </Link>
              <Link to="/about" className="mainMenu">
                About
              </Link>
              <Link to="/contact" className="mainMenu">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
