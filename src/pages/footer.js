
   
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Nav,NavDropdown,Container} from 'react-bootstrap'
const Header=() =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          <Nav.Link href="/login">Login</Nav.Link>

          <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/dashboard">Dash Users</Nav.Link>
            <Nav.Link href="/connections"> My Connections</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
     
</Navbar>
  )
}

export default Header