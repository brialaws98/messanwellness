import React from "react";
import "./Navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

 export default function Navbar () {
     return (  
    <div>
     <ReactBootStrap.Navbar  className="color-nav" expand="lg">
       
     <Link to="/home">
     <ReactBootStrap.Navbar.Brand href="#home">
          <img src="./img/logo.webp" />
        </ReactBootStrap.Navbar.Brand>
     </Link>
       
       <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
       <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="me-auto">
      
           <Link to="/home">
              <ReactBootStrap.Nav.Link href="#home"> Home </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/services">
            <ReactBootStrap.Nav.Link href="#services"> Services </ReactBootStrap.Nav.Link>
            </Link>

          <Link>
           <ReactBootStrap.Nav.Link href="#link">
              Book Online
            </ReactBootStrap.Nav.Link>
          </Link>
           

          <Link to="blog">
            <ReactBootStrap.Nav.Link href="#blog"> Blog</ReactBootStrap.Nav.Link>
          </Link>

          <AnchorLink href="#testimonials">
            <ReactBootStrap.Nav.Link >
              Testimonials
            </ReactBootStrap.Nav.Link>
            </AnchorLink>

          
          <AnchorLink href="#contactUs">
            <ReactBootStrap.Nav.Link >
              Contact 
            </ReactBootStrap.Nav.Link>
            </AnchorLink>

          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
        </div>
           
     );
 }