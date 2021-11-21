import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PostsScreen } from "../components/home-comp/PostsScreen";
import { HomeScreen } from "../components/home-comp/HomeScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
         <Route exact path="/posts/:postsId" component={PostsScreen} /> 
        <Redirect to="/" />
      </Switch>
    </>
  );
};
