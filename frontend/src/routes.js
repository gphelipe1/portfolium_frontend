import React from "react";
import { Route, Switch } from "react-router-dom";

import { PATHS } from "./utils/constansts";

import Login from "./pages/Login";
import Portifolio from "./pages/Portifolios";
import Profile from "./pages/Profile";

const Rotas = () => {
  return (
    <Switch>
      <Route path={PATHS.HOME} component={Portifolio} exact />
      <Route path={PATHS.LOGIN} component={Login} exact />
      <Route path={PATHS.PROFILE} component={Profile} exact />
    </Switch>
  );
};

export default Rotas;
