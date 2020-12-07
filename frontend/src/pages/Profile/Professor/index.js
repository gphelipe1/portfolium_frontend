import React, { useEffect, useState } from "react";

import { reduceText } from "../../../utils/index";
import { getProjects, validateProject } from "../../../services/projects";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";

import {
  Container,
  Wrapper,
  ProjectWrapper,
  ButtonsWrapper,
  Student,
  ProjectName,
} from "./styles";

const Professor = () => {
  const [projects, setProjects] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const result = await getProjects();
      setProjects(result.filter((el) => el.validado === null));
    };

    fetch();
  }, [render]);

  const validate = async ({ id, validate }) => {
    await validateProject({ id, validate });
  };

  const renderProjects = (project) => {
    return (
      <ProjectWrapper>
        <Card>
          <Student>{project.aluno.nome}</Student>
          <Divider />
          <ProjectName>{project.nome}</ProjectName>
          <Divider />
          {reduceText(project.descricao)}
          <ButtonsWrapper>
            <Button
              onClick={() => {
                validate({ id: project.id, validate: false });
                setRender(true);
              }}
            >
              Rejeitar
            </Button>
            <Button
              onClick={() => {
                validate({ id: project.id, validate: true });
                setRender(true);
              }}
            >
              Aprovar
            </Button>
          </ButtonsWrapper>
        </Card>
      </ProjectWrapper>
    );
  };

  return (
    <Container>
      <Card>
        <Wrapper>{projects.map((el) => renderProjects(el))}</Wrapper>
      </Card>
    </Container>
  );
};

export default Professor;
