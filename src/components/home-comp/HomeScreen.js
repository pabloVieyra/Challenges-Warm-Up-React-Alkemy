import React from "react";
import { Navbar } from "reactstrap";
import { NavbarBrand } from "reactstrap";
import { NavbarToggler } from "reactstrap";
import { Collapse } from "reactstrap";
import { Nav } from "reactstrap";
import { NavItem } from "reactstrap";
import { NavLink  } from "reactstrap";



import { Button } from "../login-comp/Button";
import { PostsContainer } from "./PostsContainer";

export const HomeScreen = () => {
  return (
    
    <div className="home-screen animate__animated animate__fadeIn animate__slow">
      
      <div className="container mt-1">
    
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Warm Up!-home
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/Creacion">
            Creacion de Blogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/pabloVieyra/Challenges-Warm-Up-React-Alkemy">
            GitHub
          </NavLink>
        </NavItem>
        
      </Nav>
      <Button ></Button>
    </Collapse>
  </Navbar>
    

      
      
    
      </div>

      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
          <h1 className="display-3">
            <b>Warm up - Challenge</b>
            </h1>
          <p className="lead">
            <b> Bienvenido a la aplicacion de Blogs!</b>
          </p>
        </div>
        <hr className="my-4" />
        <div className="container mt-1">
          <h1 className="display-5">
            <b>Blogs</b>
          </h1>
           <PostsContainer /> 
        </div>
      </div>
       
    </div>
  );
};