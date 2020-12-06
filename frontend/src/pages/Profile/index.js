import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useStore } from "../../store";
import { findStudentProjects } from "../../services/students";

import ProfileIcon from "../../assets/profile";
import Card from "../../components/Card";

import { Container, ProfileContainer, Info, Name, Description } from "./styles";

const Profile = () => {
  const store = useStore();
  const id = store.getUserId();
  const name = store.getUserName();
  const description = store.getUserDescription();

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
      </Container>
    );
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await findStudentProjects(id);
      console.log(result);
    };

    fetch();
  }, [id]);

  return <>{renderComponent()}</>;
};

export default Profile;
