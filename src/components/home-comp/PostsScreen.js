import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";


export const PostsScreen = () =>{
    const { postsId } = useParams();

    const url = `https://jsonplaceholder.typicode.com/posts/${postsId}`;
  
    const { data, loading } = useFetch(url);
  
    return (
      <div className="container">
        {loading ? (
         <div></div>
        ) : (
          <div className="card-hero mt-5 animate__animated animate__fadeIn animate__slow">
            <div className="name">
              <h1>{data.name}</h1>
            </div>
            <div >
              
              <div className="info-container">
                <div className="info">
    
                  <h5>Info: </h5>
                  <ul>
                    <li>UserId: {data.userId}</li>
                    <li>Id: {data.id}</li>
                  </ul>
                  <h3>Title:</h3>
                  <h4>{data.title}</h4>
                  <h3>Body:  </h3>
                  <h6>{data.body}</h6>
                  
                </div>
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
        )}
      </div>
    );


}