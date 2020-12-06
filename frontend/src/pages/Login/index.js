import React from "react";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

import { Container, CardWrapper, Form, Footer } from "./styles";

const Login = () => {
  return (
    <Container>
      <CardWrapper>
        <Card>
          <Form>
            <Input placeholder={"Login"} />
            <Input placeholder={"Senha"} />
            <Button>Login</Button>
          </Form>
          <Divider />
          <Footer>
            Não possui uma conta?
            <Button>Registrar</Button>
          </Footer>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Login;
