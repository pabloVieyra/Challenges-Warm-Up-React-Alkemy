import React from "react";
import axios from "axios";

import { NavLink} from "react-router-dom";

import {Form,FormGroup,Label,Col,Input,Button} from "reactstrap";




const url = `https://jsonplaceholder.typicode.com/posts`;





export const PostsCreacion = () => {


  const handle = (e) => {
    e.preventDefault();
    const Titulo = e.target.TituloA
    const Body= e.target.BodyA
    const UserId= e.target.UserIdA
     axios.post(url,{
      Titulo, 
      Body,
      UserId
      })
      e.target.TituloA = "";
      e.target.BodyA = "";
      e.target.UserIdA= "";
    
  };



  return (
    <div className="home-screen animate__animated animate__fadeIn animate__slow">
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
     
          <h1 className="display-5">
          
            <b>Bienvenido al area de Creacion</b>
           
            </h1>

            <div className="container mt-1">
            <Form>
                  <FormGroup row>
                    <Label
                      for="TituloA"
                      sm={2}
                    >
                      Titulo
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="TituloA"
                        name="TituloA"
                        placeholder="TituloA"
                        type="TituloA"
                        onChange={handle}
                        
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="UserIdA"
                      sm={2}
                    >
                      UserId
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="UserIdA"
                        name="UserIdA"
                        placeholder="UserIdA"
                        type="UserIdA"
                        onChange={handle}
                        
                      />
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Label
                      for="BodyA"
                      sm={2}
                    >
                      Body
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="BodyA"
                        name="BodyA"
                        type="textareaA"
                        onChange={handle}
                       
                      />
                      
                    </Col>
                  </FormGroup>
                  <FormGroup
                    check
                    row
                  >
                    <Col
                      sm={{
                        offset: 10,
                        size: 10
                      }}
                    >
                      <Button>
                        Submit
                      </Button>
                    </Col>
                  </FormGroup>
          </Form>  
          </div>    
          <div></div>   
          <NavLink
                  className="btn btn-dark btn-lg btn-block btn-large"
                  exact
                  to="/"
                >
                  Back
        </NavLink>
        
        </div>
       
      </div>
      
       
    </div>
  );
};