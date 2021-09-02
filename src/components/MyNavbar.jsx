import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Dropdown,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function MyNav() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">My Book Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Link to ="/registration">
      <div className = "Nav.Link text-muted mt-2 active" >Registration</div>
      </Link>
      
    </Nav>
      
      
      </Navbar>

  );
}