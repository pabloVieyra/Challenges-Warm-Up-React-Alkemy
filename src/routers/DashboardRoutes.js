import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PostsScreen } from "../components/home-comp/PostsScreen";
import { HomeScreen } from "../components/home-comp/HomeScreen";
import { PostsCreacion } from "../components/home-comp/PostsCreacion";

export const DashboardRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
         <Route exact path="/posts/:postsId" component={PostsScreen} /> 
         <Route exact path="/Creacion" component={PostsCreacion} /> 

        <Redirect to="/" />
      </Switch>
    </>
  );
};
