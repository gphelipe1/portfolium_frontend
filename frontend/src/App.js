import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "./routes";
import { withStore } from "./store";

import Logo from "./assets/logo";
import Button from "./components/Button";
import Divider from "./components/Divider";

import { Container, Header, Wrapper, Option, LogoWrapper } from "./styles";

const App = () => {
  const ContainerWithStore = withStore(Container);

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
      <Link to="/login">
        <Button>Login</Button>
      </Link>
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
