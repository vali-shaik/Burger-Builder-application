import React from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.module.css";
import { Form, FormControl, Button, Navbar, Nav } from "react-bootstrap";
const Layout = (props) => {
  return (
    <Aux>
      <Navbar className={classes.NavBarClass} variant="dark">
        <Navbar.Brand href="#home">Burger Builder</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Orders</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
