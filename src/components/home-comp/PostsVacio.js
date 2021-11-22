import React from "react";
import { Busqueda } from "./Busqueda"; 

export const PostsVacio = () => {

  return (
    <div className="col">
      
        <div className="btn-container">
          <h5>Añadir a Posts</h5>
          <Busqueda />
        </div>
      
    </div>
  );
};
