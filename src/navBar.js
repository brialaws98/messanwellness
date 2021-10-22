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
       <ReactBootStrap.Navbar.Collapse className="text-center">
          <ReactBootStrap.Nav className="me-auto">
      
           <Link to="/home">
              <ReactBootStrap.Nav.Link href="#home"> 
               <a className="link-text">
                     Home 
              </a>
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/services">
            <ReactBootStrap.Nav.Link href="#services"> 
            <a className="link-text">
                Services 
            </a>
            </ReactBootStrap.Nav.Link>
            </Link>

          <Link>
           <ReactBootStrap.Nav.Link href="#link">
           <a className="link-text">
              Book Online
            </a>
            </ReactBootStrap.Nav.Link>
          </Link>
           

          <Link to="blog">
            <ReactBootStrap.Nav.Link href="#blog">
            <a className="link-text"> 
                Blog
            </a>
            </ReactBootStrap.Nav.Link>
          </Link>

          <AnchorLink href="#testimonials">
            <ReactBootStrap.Nav.Link >
            <a className="link-text">
              Testimonials
            </a>
            </ReactBootStrap.Nav.Link>
            </AnchorLink>

          
          <Link to="contact">
            <ReactBootStrap.Nav.Link href="#contact" >
            <a className="link-text">
              Contact 
            </a>
            </ReactBootStrap.Nav.Link>
            </Link>

          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
        </div>
           
     );
 }