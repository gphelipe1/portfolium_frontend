import React, { useEffect, useState } from "react";

import { useStore } from "../../../store";
import { reduceText } from "../../../utils";
import { addProject } from "../../../services/projects";
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
  const [name, setName] = useState("");
  const [techs, setTechs] = useState("");
  const [description, setDescription] = useState("");

  const store = useStore();

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

  const onSubmit = async () => {
    const mappedTechs = techs
      .split(",")
      .map((el) => ({ descricao: el.trim() }));

    await addProject({
      description,
      name,
      techs: mappedTechs,
      alunoId: store.getUserId(),
    });
    setShowProjects(true);
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
            <Description value="Nome" />
            <Input onChange={onChange(setName)} />
            <Description value="Descrição" />
            <Input height="200px" onChange={onChange(setDescription)} />
            <Description value="Tecnologias Utilizadas" />
            <Input onChange={onChange(setTechs)} />
          </Info>
          <Button onClick={() => onSubmit()}>
            <Span>Enviar</Span>
          </Button>
        </Card>
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
