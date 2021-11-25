import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';

class NavBar extends React.Component {
    render() { 
        return <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">LinkTree</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>;
    }
}
 
export default NavBar;
