import React from "react";

import Logo from "./assets/logo";
import { Container, Header, Wrapper, Option, LogoWrapper } from "./styles";

const App = () => {
  return (
    <Container>
      <Header>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Wrapper>
          <Option>PORTIFÓLIOS</Option>
          <Option>PERFIL</Option>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default App;
