import React from "react";
import { Redirect } from "react-router-dom";

import { useStore } from "../../store";

import ProfileIcon from "../../assets/profile";
import Card from "../../components/Card";

import Projects from "./Projects";
import Professor from "./Professor";
import { Container, ProfileContainer, Info, Name, Description } from "./styles";

const Profile = () => {
  const store = useStore();
  const id = store.getUserId();
  const name = store.getUserName();
  const type = store.getUserType();
  const description = store.getUserDescription();
  const isStudent = type === "aluno";

  const renderComponent = () => {
    if (!id) return <Redirect to={{ pathname: "/login" }} />;

    return (
      <Container>
        <ProfileContainer>
          <Card>
            <Info>
              <ProfileIcon />
              <Name>{name}</Name>
              <Description>{description}</Description>
            </Info>
          </Card>
        </ProfileContainer>
        {isStudent && <Projects userId={id} />}
        {!isStudent && <Professor />}
      </Container>
    );
  };

  return <>{renderComponent()}</>;
};

export default Profile;
