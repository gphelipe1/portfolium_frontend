import React from "react";
import { Redirect } from "react-router-dom";

import { useStore } from "../../store";

import { Container } from "./styles";

const Profile = () => {
  const store = useStore();

  if (!store.getUserId()) return <Redirect to={{ pathname: "/login" }} />;

  return <Container>PERFIL</Container>;
};

export default Profile;
