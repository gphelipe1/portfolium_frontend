import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Portifolio from "./pages/Portifolios";
import Profile from "./pages/Profile";

const Rotas = () => {
  return (
    <Switch>
      <Route path="/" component={Portifolio} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/profile" component={Profile} exact />
    </Switch>
  );
};

export default Rotas;
