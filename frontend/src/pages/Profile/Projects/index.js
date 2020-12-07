import React, { useEffect, useState } from "react";

import { reduceText } from "../../../utils";
import { findStudentProjects } from "../../../services/students";

import Add from "../../../assets/add";
import Card from "../../../components/Card";
import Name from "../../../components/Name";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import TagWrapper from "../../../components/TagWrapper";
import Description from "../../../components/Description";

import { Container, Wrapper, ProjectWrapper, ButtonWrapper } from "./styles";

const Projects = ({ userId }) => {
  const [projects, setProjects] = useState([]);
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const result = await findStudentProjects(userId);

      setProjects(result);
    };

    fetch();
  }, [userId]);

  const renderProjects = () => {
    return (
      <>
        {projects.map((el, idx) => {
          const values = el.tecnologias.map((tech) => tech.descricao);

          return (
            <ProjectWrapper key={idx}>
              <Card>
                <Name value={el.nome} />
                <Divider />
                <Description value={reduceText(el.descricao)} />
                <Divider />
                <TagWrapper values={values} />
              </Card>
            </ProjectWrapper>
          );
        })}
      </>
    );
  };

  const renderProjectsList = () => {
    return (
      <>
        <ButtonWrapper>
          <Button onClick={() => setShowProjects(false)}>
            <Add />
          </Button>
        </ButtonWrapper>
        <Card>
          <Wrapper>{renderProjects()}</Wrapper>
        </Card>
      </>
    );
  };

  const renderAdd = () => {
    return <div>HEY</div>;
  };

  return (
    <Container>
      {showProjects && renderProjectsList()}
      {!showProjects && renderAdd()}
    </Container>
  );
};

export default Projects;
