import React from "react";
import { NavLink } from "react-router-dom";



export const PostsCreacion = () => {
  return (
    <div className="home-screen animate__animated animate__fadeIn animate__slow">
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
     
          <h1 className="display-3">
            <b>Bienvenido al area de Creacion</b>
            </h1>
            <NavLink
                  className="btn btn-secondary btn-lg btn-block btn-large"
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