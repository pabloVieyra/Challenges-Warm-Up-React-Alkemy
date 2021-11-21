import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HeroScreen } from "../components/HeroScreen";
import { HomeScreen } from "../components/HomeScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/hero/:heroId" component={HeroScreen} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
