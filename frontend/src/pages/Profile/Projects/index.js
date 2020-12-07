import React, { useEffect, useState } from "react";

import { reduceText } from "../../../utils";
import { findStudentProjects } from "../../../services/students";

import Card from "../../../components/Card";
import Name from "../../../components/Name";
import Divider from "../../../components/Divider";
import TagWrapper from "../../../components/TagWrapper";
import Description from "../../../components/Description";

import { Container, Wrapper, ProjectWrapper } from "./styles";

const Projects = ({ userId }) => {
  const [projects, setProjects] = useState([]);

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

  return (
    <Container>
      <Card>
        <Wrapper>{renderProjects()}</Wrapper>
      </Card>
    </Container>
  );
};

export default Projects;
