import React, { useState } from "react";

import store from "../../store";
import { auth } from "../../services/auth";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

import { Container, CardWrapper, Form, Footer } from "./styles";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { setUserId, setUserDescription, setUserName, setUserType } = store();

  const onChange = (setter) => (e) => {
    const { value } = e.target;

    setter(value);
  };

  const onSubmit = async () => {
    try {
      const response = await auth({ login, senha: password });
      const { id, descricao, nome, tipoUsuario } = response;

      setUserId(id);
      setUserName(nome);
      setUserDescription(descricao);
      setUserType(tipoUsuario.descricao);
    } catch (err) {
      console.log("Erro ao realizar login", err);
    }
  };

  return (
    <Container>
      <CardWrapper>
        <Card>
          <Form>
            <Input placeholder={"Matrícula"} onChange={onChange(setLogin)} />
            <Input
              placeholder={"Senha"}
              onChange={onChange(setPassword)}
              secret
            />
            <Button onClick={onSubmit}>Login</Button>
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
