import React, { useEffect, useState } from "react";

import { reduceText } from "../../../utils";
import { findStudentProjects } from "../../../services/students";

import Add from "../../../assets/add";
import Card from "../../../components/Card";
import Name from "../../../components/Name";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Divider from "../../../components/Divider";
import TagWrapper from "../../../components/TagWrapper";
import Description from "../../../components/Description";

import {
  Container,
  Wrapper,
  ProjectWrapper,
  ButtonWrapper,
  NewProjectContainer,
  Info,
  Span,
} from "./styles";

const Projects = ({ userId }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [projects, setProjects] = useState([]);
  const [link, setLink] = useState("");
  const [techs, setTechs] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const result = await findStudentProjects(userId);

      setProjects(result);
    };

    fetch();
  }, [userId]);

  const onChange = (setter) => (e) => {
    const { value } = e.target;

    setter(value);
  };

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
    return (
      <NewProjectContainer>
        <Card>
          <Info>
            <Description value="Descrição" />
            <Input height="200px" onChange={onChange(setDescription)} />
          </Info>
        </Card>
        <Card>
          <Info>
            <Description value="Tecnologias Utilizadas" />
            <Input onChange={onChange(setTechs)} />
            <Description value="Link" />
            <Input onChange={onChange(setLink)} />
          </Info>
        </Card>
        <Button>
          <Span>Enviar</Span>
        </Button>
      </NewProjectContainer>
    );
  };

  return (
    <Container>
      {showProjects && renderProjectsList()}
      {!showProjects && renderAdd()}
    </Container>
  );
};

export default Projects;
