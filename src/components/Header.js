import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">BRWO</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Borrow Items</Nav.Link>
            <Nav.Link href="#features">Borrow Time</Nav.Link>
            <Nav.Link href="#pricing">Request</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );  
  }
}

export default Header;
