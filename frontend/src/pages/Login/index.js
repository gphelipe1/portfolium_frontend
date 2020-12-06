import React, { useState } from "react";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

import { Container, CardWrapper, Form, Footer } from "./styles";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (setter) => (e) => {
    const { value } = e.target;

    setter(value);
  };

  return (
    <Container>
      <CardWrapper>
        <Card>
          <Form>
            <Input placeholder={"Matrícula"} onChange={onChange(setLogin)} />
            <Input placeholder={"Senha"} onChange={onChange(setPassword)} />
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
