import React from "react";
import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";

 export default function NavBar (){
     return (
        <Navbar bg="dark" variant="dark">
        
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
        </Nav>
        
      </Navbar>
     );
 }