import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} />
          <PrivateRoute path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

/*

*/
