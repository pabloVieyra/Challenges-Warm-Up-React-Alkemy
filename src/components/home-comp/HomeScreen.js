import React from "react";
import { Button } from "../login-comp/Button";
//import { CardsContainer } from "./CardsContainer";

export const HomeScreen = () => {
  return (
    <div className="home-screen animate__animated animate__fadeIn animate__slow">
      <div className="container mt-1">
      <Button ></Button>
      </div>
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container">
          <h1 className="display-3">
            <b>Warm up - Challenge</b>
            </h1>
          <p className="lead">
            <b>Hello- bienvenido a la aplicacion de posts</b>
          </p>
        </div>
        <hr className="my-4" />
        <div className="container mt-1">
          <h1 className="display-5">
            <b>Posts</b>
          </h1>
          {/* <CardsContainer /> */}
        </div>
      </div>
       
    </div>
  );
};