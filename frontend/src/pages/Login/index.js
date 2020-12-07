import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useStore } from "../../store";
import { auth } from "../../services/auth";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

import { Container, CardWrapper, Form, Footer } from "./styles";

const Login = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const {
    getUserId,
    setUserId,
    setUserName,
    setUserDescription,
    setUserType,
  } = useStore();

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

      history.go(0);
    } catch (err) {
      console.log("Erro ao realizar login", err);
    }
  };

  if (getUserId()) history.push("/profile");

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
