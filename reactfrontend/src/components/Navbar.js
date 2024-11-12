import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'; 

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        
        <Navbar.Brand as={Link} to="/" className="brand">
          GYM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/plan" className="nav-item">
              Plans
            </Nav.Link>
            <Nav.Link as={Link} to="/program" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/Member" className="nav-item">
              Memborship
            </Nav.Link>
            
            <Nav.Link as={Link} to="/login" className="nav-item">
              Log In
            </Nav.Link>
             
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
