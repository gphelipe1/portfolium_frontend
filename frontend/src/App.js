import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "./routes";
import { withStore, useStore } from "./store";

import Logo from "./assets/logo";
import Button from "./components/Button";
import Divider from "./components/Divider";

import { userIdKey } from "./utils/constansts";

import { Container, Header, Wrapper, Option, LogoWrapper } from "./styles";

const App = () => {
  const userId = localStorage.getItem(userIdKey);
  const ContainerWithStore = withStore(Container);

  const renderUserInfo = () => {
    return userId ? (
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    ) : (
      <Wrapper />
    );
  };

  const renderHeader = () => (
    <Header>
      <Link to="/">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Link>
      <Wrapper>
        <Link to="/">
          <Option>PORTIFÓLIOS</Option>
        </Link>
        <Link to="/profile">
          <Option>PERFIL</Option>
        </Link>
      </Wrapper>
      {renderUserInfo()}
    </Header>
  );

  return (
    <ContainerWithStore>
      <Router>
        {renderHeader()}
        <Divider />
        <Routes />
      </Router>
    </ContainerWithStore>
  );
};

export default App;
