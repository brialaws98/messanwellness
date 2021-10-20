import React from "react";
import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";

 export default function Navbar () {
     return (
     <ReactBootStrap.Navbar  className="color-nav" expand="lg">

       <ReactBootStrap.Navbar.Brand href="#home">
          <img src="./img/logo.webp" />
        </ReactBootStrap.Navbar.Brand>
       <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
       <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
            <ReactBootStrap.Nav.Link href="#home">
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
              About Us
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
              Services
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
              Book Online
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
               Blog
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
              Testimonials
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
     );
 }