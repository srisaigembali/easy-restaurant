import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/Main.css';
import Logo from '../../assets/images/logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              {/* eslint-disable-next-line */}
              <img src={Logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link>
                <Link to="/" className="mainMenu">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/menu" className="mainMenu">
                  Menu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="mainMenu">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="mainMenu">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
