import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "./routes";
import { withStore } from "./store";

import Logo from "./assets/logo";
import Button from "./components/Button";
import Divider from "./components/Divider";

import { userIdKey, PATHS } from "./utils/constansts";

import { Container, Header, Wrapper, Option, LogoWrapper } from "./styles";

const App = () => {
  const userId = localStorage.getItem(userIdKey);
  const ContainerWithStore = withStore(Container);

  const renderUserInfo = () => {
    return !userId ? (
      <Link to={PATHS.LOGIN}>
        <Button>Login</Button>
      </Link>
    ) : (
      <Wrapper>
        <Button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Logout
        </Button>
      </Wrapper>
    );
  };

  const renderHeader = () => (
    <Header>
      <Link to={PATHS.HOME}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Link>
      <Wrapper>
        <Link to={PATHS.HOME}>
          <Option>PORTIFÓLIOS</Option>
        </Link>
        <Link to={PATHS.PROFILE}>
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
