import React from "react";
import { NavLink} from "react-router-dom";

import {Form,FormGroup,Label,Col,Input,Button} from "reactstrap";



export const PostsCreacion = () => {
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
                      for="Titulo"
                      sm={2}
                    >
                      Titulo
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="Titulo"
                        name="Titulo"
                        placeholder="Titulo"
                        type="Titulo"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="UserId"
                      sm={2}
                    >
                      UserId
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="UserId"
                        name="UserId"
                        placeholder="UserId"
                        type="UserId"
                      />
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Label
                      for="Body"
                      sm={2}
                    >
                      Body
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
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